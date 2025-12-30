import { EditorView, Decoration, ViewPlugin } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { syntaxTree } from '@codemirror/language';
import { markdown } from '@codemirror/lang-markdown';
import './markdown-editor.css';

// Helper to check if cursor is on the same line as a position
function cursorOnSameLine(state, pos, isFocused) {
  // If editor is not currently focused, don't reveal markdown
  if (!isFocused) {
    return false;
  }

  const cursorLine = state.doc.lineAt(state.selection.main.head).number;
  const posLine = state.doc.lineAt(pos).number;
  return cursorLine === posLine;
}

// ViewPlugin to add/remove decorations based on cursor position
const livePreviewPlugin = ViewPlugin.fromClass(class {
  constructor(view) {
    this.isFocused = view.hasFocus;
    this.decorations = this.buildDecorations(view);
  }

  update(update) {
    // Track current focus state
    if (update.focusChanged) {
      this.isFocused = update.view.hasFocus;
    }

    if (update.docChanged || update.selectionSet || update.viewportChanged || update.focusChanged) {
      this.decorations = this.buildDecorations(update.view);
    }
  }

  buildDecorations(view) {
    const decorations = [];
    const { state } = view;

    // Iterate through visible viewport
    for (let { from, to } of view.visibleRanges) {
      syntaxTree(state).iterate({
        from,
        to,
        enter: (node) => {
          const { from: nodeFrom, to: nodeTo, type } = node;

          // Skip if cursor is on the same line as this node (and editor is focused)
          if (cursorOnSameLine(state, nodeFrom, this.isFocused)) {
            return;
          }

          // Handle heading marks
          if (type.name === 'HeaderMark') {
            decorations.push(
              Decoration.mark({ class: 'cm-hide-token' }).range(nodeFrom, nodeTo)
            );
          }

          // Handle emphasis marks (*, **, ___, etc.)
          if (type.name === 'EmphasisMark') {
            decorations.push(
              Decoration.mark({ class: 'cm-hide-token' }).range(nodeFrom, nodeTo)
            );
          }

          // Handle code marks
          if (type.name === 'CodeMark') {
            decorations.push(
              Decoration.mark({ class: 'cm-hide-token' }).range(nodeFrom, nodeTo)
            );
          }

          // Handle link marks
          if (type.name === 'LinkMark' || type.name === 'URL') {
            decorations.push(
              Decoration.mark({ class: 'cm-hide-token' }).range(nodeFrom, nodeTo)
            );
          }

          // Style headings
          if (type.name.match(/^ATXHeading\d/)) {
            const level = type.name.replace('ATXHeading', '');
            decorations.push(
              Decoration.mark({ class: `cm-heading cm-heading${level}` }).range(nodeFrom, nodeTo)
            );
          }

          // Style strong emphasis
          if (type.name === 'StrongEmphasis') {
            decorations.push(
              Decoration.mark({ class: 'cm-strong' }).range(nodeFrom, nodeTo)
            );
          }

          // Style emphasis
          if (type.name === 'Emphasis') {
            decorations.push(
              Decoration.mark({ class: 'cm-em' }).range(nodeFrom, nodeTo)
            );
          }

          // Style inline code
          if (type.name === 'InlineCode') {
            decorations.push(
              Decoration.mark({ class: 'cm-inline-code' }).range(nodeFrom, nodeTo)
            );
          }

          // Style links
          if (type.name === 'Link') {
            decorations.push(
              Decoration.mark({ class: 'cm-link' }).range(nodeFrom, nodeTo)
            );
          }
        }
      });
    }

    return Decoration.set(decorations, true);
  }
}, {
  decorations: v => v.decorations
});

// Theme for styling
const livePreviewTheme = EditorView.theme({
  '&': {
    fontSize: '16px',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
  },
  '.cm-content': {
    padding: '1rem',
    minHeight: '384px',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
  },
  '.cm-line': {
    fontFamily: 'inherit'
  },
  // Hide markdown tokens
  '.cm-hide-token': {
    display: 'none'
  },
  // Heading styles
  '.cm-heading': {
    fontWeight: '700',
    lineHeight: '1.2'
  },
  '.cm-heading1': {
    fontSize: '2em',
    color: '#1f2937'
  },
  '.cm-heading2': {
    fontSize: '1.5em',
    color: '#374151'
  },
  '.cm-heading3': {
    fontSize: '1.25em',
    color: '#4b5563'
  },
  '.cm-heading4': {
    fontSize: '1.125em',
    color: '#4b5563'
  },
  '.cm-heading5': {
    fontSize: '1em',
    color: '#6b7280',
    fontWeight: '600'
  },
  '.cm-heading6': {
    fontSize: '0.875em',
    color: '#6b7280',
    fontWeight: '600'
  },
  // Bold and italic
  '.cm-strong': {
    fontWeight: '700'
  },
  '.cm-em': {
    fontStyle: 'italic'
  },
  // Inline code
  '.cm-inline-code': {
    backgroundColor: '#f3f4f6',
    padding: '0.125rem 0.25rem',
    borderRadius: '0.25rem',
    fontFamily: 'ui-monospace, monospace',
    fontSize: '0.875em',
    color: '#1f2937'
  },
  // Links
  '.cm-link': {
    color: '#2563eb',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
});

// Main editor class
class MarkdownEditor {
  constructor(textareaElement) {
    this.textarea = textareaElement;
    this.editor = null;

    // Hide original textarea
    this.textarea.style.display = 'none';

    // Create editor container
    this.editorContainer = document.createElement('div');
    this.editorContainer.className = 'codemirror6-editor-container';
    this.textarea.parentNode.insertBefore(this.editorContainer, this.textarea);

    this.initializeEditor();
  }

  initializeEditor() {
    const startState = EditorState.create({
      doc: this.textarea.value,
      extensions: [
        markdown(),
        livePreviewPlugin,
        livePreviewTheme,
        EditorView.lineWrapping,

        // Update handler to sync with textarea
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            this.textarea.value = update.state.doc.toString();
          }
        })
      ]
    });

    this.editor = new EditorView({
      state: startState,
      parent: this.editorContainer
    });
  }

  destroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const contentTextarea = document.querySelector('textarea[name="content"]');
  if (contentTextarea) {
    window.markdownEditor = new MarkdownEditor(contentTextarea);

    // Ensure sync before form submission
    const form = contentTextarea.closest('form');
    if (form) {
      form.addEventListener('submit', () => {
        contentTextarea.value = window.markdownEditor.editor.state.doc.toString();
      });
    }
  }
});
