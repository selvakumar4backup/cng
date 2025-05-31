// Notes.js
import React, { useState, useRef, useEffect, forwardRef, useCallback } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Tabs,
  Tab,
  Popper,
  Paper,
  Dialog,
  ClickAwayListener,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Draggable from 'react-draggable';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';




const highlight_img = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1667 4.16667H12.5V2.5H14.1667V4.16667ZM12.5 12.5V17.5L14.4083 15.5917L16.325 17.5L17.5 16.325L15.5917 14.4167L17.5 12.5H12.5ZM15.8333 7.5H17.5V5.83333H15.8333V7.5ZM15.8333 10.8333H17.5V9.16667H15.8333V10.8333ZM9.16667 17.5H10.8333V15.8333H9.16667V17.5ZM5.83333 4.16667H7.5V2.5H5.83333V4.16667ZM2.5 14.1667H4.16667V12.5H2.5V14.1667ZM4.16667 17.5V15.8333H2.5C2.5 16.75 3.25 17.5 4.16667 17.5ZM15.8333 2.5V4.16667H17.5C17.5 3.25 16.75 2.5 15.8333 2.5ZM9.16667 4.16667H10.8333V2.5H9.16667V4.16667ZM2.5 7.5H4.16667V5.83333H2.5V7.5ZM5.83333 17.5H7.5V15.8333H5.83333V17.5ZM2.5 10.8333H4.16667V9.16667H2.5V10.8333ZM2.5 4.16667H4.16667V2.5C3.25 2.5 2.5 3.25 2.5 4.16667Z" fill="#707070" />
  </svg>
);

const selectedhilight_alt = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1667 4.16667H12.5V2.5H14.1667V4.16667ZM12.5 12.5V17.5L14.4083 15.5917L16.325 17.5L17.5 16.325L15.5917 14.4167L17.5 12.5H12.5ZM15.8333 7.5H17.5V5.83333H15.8333V7.5ZM15.8333 10.8333H17.5V9.16667H15.8333V10.8333ZM9.16667 17.5H10.8333V15.8333H9.16667V17.5ZM5.83333 4.16667H7.5V2.5H5.83333V4.16667ZM2.5 14.1667H4.16667V12.5H2.5V14.1667ZM4.16667 17.5V15.8333H2.5C2.5 16.75 3.25 17.5 4.16667 17.5ZM15.8333 2.5V4.16667H17.5C17.5 3.25 16.75 2.5 15.8333 2.5ZM9.16667 4.16667H10.8333V2.5H9.16667V4.16667ZM2.5 7.5H4.16667V5.83333H2.5V7.5ZM5.83333 17.5H7.5V15.8333H5.83333V17.5ZM2.5 10.8333H4.16667V9.16667H2.5V10.8333ZM2.5 4.16667H4.16667V2.5C3.25 2.5 2.5 3.25 2.5 4.16667Z" fill="#3942B0" />
  </svg>
);

const vector_img = (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.444824 4.08333H9.61149V5.75H0.444824V4.08333ZM0.444824 2.41667H9.61149V0.75H0.444824V2.41667ZM0.444824 9.08333H6.27816V7.41667H0.444824V9.08333ZM12.9532 6.475L13.5448 5.88333C13.8698 5.55833 14.3948 5.55833 14.7198 5.88333L15.3115 6.475C15.6365 6.8 15.6365 7.325 15.3115 7.65L14.7198 8.24167L12.9532 6.475ZM12.3615 7.06667L7.94482 11.4833V13.25H9.71149L14.1282 8.83333L12.3615 7.06667Z" fill="#707070" />
  </svg>
);

const selectedvector = (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.444824 4.08333H9.61149V5.75H0.444824V4.08333ZM0.444824 2.41667H9.61149V0.75H0.444824V2.41667ZM0.444824 9.08333H6.27816V7.41667H0.444824V9.08333ZM12.9532 6.475L13.5448 5.88333C13.8698 5.55833 14.3948 5.55833 14.7198 5.88333L15.3115 6.475C15.6365 6.8 15.6365 7.325 15.3115 7.65L14.7198 8.24167L12.9532 6.475ZM12.3615 7.06667L7.94482 11.4833V13.25H9.71149L14.1282 8.83333L12.3615 7.06667Z" fill="#3942B0" />
  </svg>
);

const expandIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17V11H4.5V14.4375L14.4375 4.5H11V3H17V9H15.5V5.5625L5.5625 15.5H9V17H3Z" fill="#252525" />
  </svg>
);

const collapseIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.0625 18L2 16.9375L7.4375 11.5H4V10H10V16H8.5V12.5625L3.0625 18ZM10 10V4H11.5V7.4375L16.9375 2L18 3.0625L12.5625 8.5H16V10H10Z" fill="#252525" />
  </svg>
);

const righticon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z" fill="#454545" />
  </svg>
);

const regionConfig = {
  instruction: {
    color: '#b84d84',
    tabs: ['Instructions'],
  },
  research: {
    color: '#67BC46',
    tabs: ['Parent Conflict', 'Parenting Time', 'Socioeconomic Status'],
  },
  evidence: {
    color: '#F89B1B ',
    tabs: ['Child Custody Form', 'Teacher Interview', 'Childs Crayon Drawing', 'Voiceemail Messages'],
  },
  decision: {
    color: '#009FDA',
    tabs: ['Notes'],
  },
};

// Configure the image resize extension
const imageResizeConfig = {
  inline: true,
  allowBase64: true,
  HTMLAttributes: {
    class: 'resizable-image',
  },
  defaultWidth: 300,
  onResize: (img) => {
    // Optional: Add any custom behavior when resizing is done
    console.log('Image resized to:', img.style.width, 'x', img.style.height);
  },
};

// Function to handle image paste
const handleImagePaste = (view, event, editor) => {
  const items = (event.clipboardData || event.originalEvent.clipboardData).items;
  
  for (const item of items) {
    if (item.type.indexOf('image') !== -1) {
      event.preventDefault();
      const file = item.getAsFile();
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        editor.chain().focus().setImage({ 
          src: imageUrl,
          alt: 'Pasted image',
          width: null,
          height: null
        }).run();
      };
      
      reader.readAsDataURL(file);
      return true;
    }
  }
  return false;
};

// TipTap Editor Component with image paste support
const Tiptap = ({ value, onChange, placeholder }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      ImageResize.configure(imageResizeConfig),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      handlePaste: (view, event) => {
        return handleImagePaste(view, event, editor);
      },
      handleDrop: (view, event, _slice, moved) => {
        if (!moved && event.dataTransfer.files && event.dataTransfer.files[0]) {
          const file = event.dataTransfer.files[0];
          if (file.type.includes('image/')) {
            event.preventDefault();
            const reader = new FileReader();
            reader.onload = (e) => {
              const imageUrl = e.target.result;
              editor.chain().focus().setImage({ src: imageUrl }).run();
            };
            reader.readAsDataURL(file);
            return true;
          }
        }
        return false;
      },
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  });

// Update editor content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap-editor">
      <EditorContent 
        editor={editor} 
        placeholder={placeholder}
        style={{ minHeight: '200px', padding: '8px' }}
      />
      <style jsx global>{`
        .resizable-image {
          position: relative;
          max-width: 100%;
          cursor: default;
          display: inline-block;
          line-height: 0;
        }
        .resizable-image .resize-trigger {
          position: absolute;
          right: -6px;
          bottom: -9px;
          opacity: 0;
          transition: 0.3s ease;
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background: #4b5563;
          border: 2px solid white;
          cursor: nwse-resize;
        }
        .resizable-image:hover .resize-trigger {
          opacity: 1;
        }
      `}</style>
    </div>
  )
};


const Notes = ({ anchorEl, open, onClose, selectedSection, selectedSidebarTab, onNewNote }) => {
  const [tabValue, setTabValue] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const draggableRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [highlights, setHighlights] = useState([]);
  const [popupTabValue, setPopupTabValue] = useState(0);
  const [isSelectionDialogOpen, setIsSelectionDialogOpen] = useState(false);
  const [selectionNoteContent, setSelectionNoteContent] = useState('');
  const [selectedRange, setSelectedRange] = useState(null);

  // const handleClose = () => {
  //   setIsExpanded(false);
  //   setNoteContent('');
  // };

  const closeAllPopups = () => {
    setIsDialogOpen(false);
    setIsSelectionDialogOpen(false);
    setNoteContent('');
  };


  const handleOpenPopup = () => {
    setPopupTabValue(0);
    setIsSelectionDialogOpen(false);
    setSelectionNoteContent('');
    setIsDialogOpen(true);
  };

  useEffect(() => {
    if (open && draggableRef.current) {
      draggableRef.current.focus();
    }
  }, [open]);

   // Close popups when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       popupRef.current &&
  //       !popupRef.current.contains(event.target) &&
  //       selectionPopupRef.current &&
  //       !selectionPopupRef.current.contains(event.target)
  //     ) {
  //       closeAllPopups();
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  
  useEffect(() => {
    console.log('Notes component mounted 1',popupTabValue);
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeAllPopups();
      }
    };
    setPopupTabValue(0);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDialogOpen, isSelectionDialogOpen]);

  useEffect(() => {
    console.log('highlights');
  }, []);

  useEffect(() => {
    console.log('Notes component mounted 2');

    const handleSelection = () => {
      const selection = window.getSelection();
      const selectedText = selection.toString().trim();

      if (selectedText && selectedColor) {
        const newHighlight = {
          text: selectedText,
          color: selectedColor,
        };
        setHighlights((prev) => [...prev, newHighlight]);
        selection.removeAllRanges();
      }
    };
    document.addEventListener('mouseup', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, [isDialogOpen, popupTabValue, selectedColor, selectedSection]);

  function isSelectionInMainContent() {
    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    const range = selection.getRangeAt(0);
    let node = range.commonAncestorContainer;
    while (node) {
      if (node.nodeType === 1 && node.id === 'main-content') {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  useEffect(() => {
    console.log('Notes component mounted 3');

    const handleTextSelection = (e) => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      if (selectedSection === "instruction") {
        return;
      }
      if (text && isSelectionInMainContent()) {
        setIsDialogOpen(false);
        setSelectionNoteContent(text);
        setSelectedColor(null);
        if (selection.rangeCount > 0) {
          setSelectedRange(selection.getRangeAt(0).cloneRange());
        } else {
          setSelectedRange(null);
        }
        setIsSelectionDialogOpen(true);
        setTimeout(() => selection.removeAllRanges(), 0);
      }
    };
    document.addEventListener('mouseup', handleTextSelection);
    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
    };
  }, [selectedSection]);

  useEffect(() => {
    console.log('Notes component mounted 4');
    if (isDialogOpen) {
      setNoteContent('');
    }
  }, [isDialogOpen]);

  const handleSaveNote = () => {
    if (!noteContent.trim()) {
      alert('Note content cannot be empty!');
      return;
    }
    const newNote = {
      content: noteContent,
      sectionColor: regionConfig[selectedSection].color,
      timestamp: new Date(),
      note_section: 1,
      section: selectedSection,
      tab: selectedSidebarTab,
    };
    setNotes((prevNotes) => {
      const updated = [...prevNotes, newNote];
      localStorage.setItem('notes', JSON.stringify(updated));
      return updated;
    });
    if (typeof onNewNote === 'function') onNewNote();
    setNoteContent('');
    setIsDialogOpen(false);
  };

  const handleSelectionColor = (color) => {
    setSelectedColor(color);
    let text = selectionNoteContent;
    if (!text) {
      setIsSelectionDialogOpen(false);
      setSelectionNoteContent('');
      return;
    }
    if (color === null) {
      setIsSelectionDialogOpen(false);
      setSelectionNoteContent('');
      setSelectedColor(null);
      return;
    }
    const range = selectedRange;
    if (!range) return;
    let startNode = range.startContainer.nodeType === 3 ? range.startContainer : getFirstTextNode(range.startContainer);
    let endNode = range.endContainer.nodeType === 3 ? range.endContainer : getFirstTextNode(range.endContainer);
    if (!startNode || !endNode || (range.startOffset === 0 && range.endOffset === 0)) {
      setIsSelectionDialogOpen(false);
      setSelectionNoteContent('');
      setSelectedColor(null);
      return;
    }
    let highlightSegments = [];
    const stored = localStorage.getItem('highlightedNotes');  
    const parsed = JSON.parse(stored);
    const isTextAlreadyHighlighted = (text) => {
      return parsed?.some(note => note.content === text);
    };

    if (isTextAlreadyHighlighted(text)) {
      const updatedNotes = parsed.map(note => {
        if (note.content === text) {
          return {
            ...note,
            highlightColor: color
          };
        }
        return note;
      });
      localStorage.setItem('highlightedNotes', JSON.stringify(updatedNotes));
      console.log('Text is already highlighted.');
      setSelectedColor(null);
      setIsSelectionDialogOpen(false);
      setSelectionNoteContent('');
      setSelectedRange(null);
      return;
    }
    if (startNode === endNode) {
      const mainContent = document.getElementById('main-content');
      function getTextNodesInOrder(node) {
        let textNodes = [];
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        let n;
        while ((n = walker.nextNode())) textNodes.push(n);
        return textNodes;
      }
      const allTextNodes = getTextNodesInOrder(mainContent);
      const nodeIdx = allTextNodes.indexOf(startNode);
      highlightSegments.push({
        content: startNode.nodeValue.substring(range.startOffset, range.endOffset),
        startXPath: getXPathForNode(startNode),
        startOffset: range.startOffset,
        endXPath: getXPathForNode(endNode),
        endOffset: range.endOffset,
        textNodeIndex: nodeIdx
      });
    } else {
      const mainContent = document.getElementById('main-content');
      function getTextNodesInOrder(node) {
        let textNodes = [];
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        let n;
        while ((n = walker.nextNode())) textNodes.push(n);
        return textNodes;
      }
      const allTextNodes = getTextNodesInOrder(mainContent);
      let inRange = false;
      for (let nIdx = 0; nIdx < allTextNodes.length; nIdx++) {
        const n = allTextNodes[nIdx];
        if (n === startNode) inRange = true;
        if (inRange) {
          let s = 0, e = n.length;
          if (n === startNode) s = range.startOffset;
          if (n === endNode) e = range.endOffset;
          if (s < e) {
            const nodeText = n.nodeValue.substring(s, e);
            if (nodeText.trim()) {
              highlightSegments.push({
                content: nodeText,
                startXPath: getXPathForNode(n),
                startOffset: s,
                endXPath: getXPathForNode(n),
                endOffset: e,
                textNodeIndex: nIdx
              });
            }
          }
        }
        if (n === endNode) break;
      }
    }
    console.log('Highlight segments to save:', highlightSegments);
    if (highlightSegments.length) {
      setNotes((prevNotes) => {
        const updated = [
          ...prevNotes,
          {
            content: text,
            highlightColor: color,
            sectionColor: regionConfig[selectedSection].color,
            section: selectedSection,
            tab: selectedSidebarTab,
            timestamp: new Date(),
            note_section: 2,
            highlightSegments,
          },
        ];
        localStorage.setItem('highlightedNotes', JSON.stringify(updated));
        return updated;
      });
    }
    if (typeof onNewNote === 'function') onNewNote();
    setSelectedColor(null);
    setIsSelectionDialogOpen(false);
    setSelectionNoteContent('');
    setSelectedRange(null);
  };

  // Render the main content area with notes
  useEffect(() => {
  console.log('Notes component mounted 5');

  const storedNotes = localStorage.getItem('notes');
  const storedHighlights = localStorage.getItem('highlightedNotes');

  try {
    const parsedNotes = storedNotes ? JSON.parse(storedNotes) : [];
    const parsedHighlights = storedHighlights ? JSON.parse(storedHighlights) : [];

    console.log('Parsed notes:', parsedNotes);
    console.log('Parsed highlights:', parsedHighlights);

    const combined = [...parsedHighlights].map(note => ({
      ...note,
      timestamp: typeof note.timestamp === 'string'
        ? note.timestamp
        : new Date(note.timestamp).toLocaleString(),
    }));

    setNotes(combined);
  } catch (e) {
    console.error('Error parsing stored notes or highlights:', e);
  }
}, []);


  // Render highlights in the main content area
  useEffect(() => {
    console.log('Notes component mounted 6');
    setTimeout(() => {
      clearHighlightsFromMainContent();
      const filtered = notes.filter(note => note.section === selectedSection && note.tab === selectedSidebarTab);
      console.log('Filtered notes for highlight rendering:', filtered);
      applyHighlightsToMainContent(filtered);
    }, 0);
  }, [notes, selectedSection, selectedSidebarTab]);

  function clearHighlightsFromMainContent() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    const walker = document.createTreeWalker(mainContent, NodeFilter.SHOW_ELEMENT, null, false);
    let node;
    const spansToRemove = [];
    while ((node = walker.nextNode())) {
      if (node.tagName === 'SPAN' && node.dataset && node.dataset.highlighted === 'true') {
        spansToRemove.push(node);
      }
    }
    spansToRemove.forEach(span => {
      const textNode = document.createTextNode(span.textContent);
      span.parentNode.replaceChild(textNode, span);
    });
  }

  function getFirstTextNode(node) {
    if (!node) return null;
    if (node.nodeType === 3) return node;
    for (let child of node.childNodes) {
      const found = getFirstTextNode(child);
      if (found) return found;
    }
    return null;
  }

  function getXPathForNode(node, root = document.body) {
    if (node.nodeType === 3) {
      const parent = node.parentNode;
      const textNodes = Array.from(parent.childNodes).filter(n => n.nodeType === 3);
      const idx = textNodes.indexOf(node) + 1;
      return getXPathForNode(parent, root) + '/text()[' + idx + ']';
    }
    const idx = (sib, name) => sib
      ? idx(sib.previousElementSibling, name || sib.localName) + (sib.localName === name)
      : 1;
    const segs = [];
    for (; node && node !== root; node = node.parentNode) {
      if (node.nodeType === 1) {
        let s = node.localName.toLowerCase();
        if (node.id) {
          s += '[@id="' + node.id + '"]';
          segs.unshift(s);
          break;
        } else {
          const i = idx(node);
          if (i > 1) s += '[' + i + ']';
        }
        segs.unshift(s);
      }
    }
    return segs.length ? '/' + segs.join('/') : null;
  }

  function getElementByXPath(path, root = document.body) {
    try {
      return document.evaluate(path, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch {
      return null;
    }
  }

  function getTextNodeFromXPathAndOffset(xpath, offset, matchText) {
    const node = getElementByXPath(xpath);
    if (!node) return null;
    if (node.nodeType === 3) return node;
    let walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let textNode;
    let total = 0;
    while ((textNode = walker.nextNode())) {
      if (typeof offset === 'number' && offset < total + textNode.length) {
        return textNode;
      }
      if (matchText && textNode.nodeValue.includes(matchText)) {
        return textNode;
      }
      total += textNode.length;
    }
    return null;
  }

  function getParentXPath(xpath) {
    if (!xpath) return null;
    const parts = xpath.split('/');
    if (parts.length <= 2) return '/';
    parts.pop();
    return parts.join('/');
  }

  function applyHighlightsToMainContent(notes) {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    console.warn('main-content element not found');
    return;
  }

  console.log('Applying highlights to main-content. Notes:', notes);

  notes
    .filter(note => note.note_section === 2)
    .forEach(note => {
      const color = note.highlightColor || note.color;

      // Case 1: highlightSegments
      if (Array.isArray(note.highlightSegments)) {
        note.highlightSegments.forEach((seg, segIdx) => {
          let node = getTextNodeFromXPathAndOffset(seg.startXPath, seg.startOffset, seg.content);

          if (!node) {
            const parentXPath = getParentXPath(seg.startXPath);
            let parentElem = getElementByXPath(parentXPath, mainContent) || mainContent;
            const text = seg.content;
            const walker = document.createTreeWalker(parentElem, NodeFilter.SHOW_TEXT, null, false);
            let textNode;
            let found = false;
            while ((textNode = walker.nextNode())) {
              if (
                textNode.nodeValue.includes(text) &&
                seg.startXPath.includes(textNode.parentNode?.tagName?.toLowerCase())
              ) {
                node = textNode;
                found = true;
                break;
              }
            }

            if (!found && typeof seg.textNodeIndex === 'number') {
              const allTextNodes = [];
              const walkerAll = document.createTreeWalker(mainContent, NodeFilter.SHOW_TEXT, null, false);
              let n;
              while ((n = walkerAll.nextNode())) allTextNodes.push(n);
              if (seg.textNodeIndex < allTextNodes.length) {
                node = allTextNodes[seg.textNodeIndex];
              }
            }

            if (!node) {
              const walker2 = document.createTreeWalker(mainContent, NodeFilter.SHOW_TEXT, null, false);
              while ((textNode = walker2.nextNode())) {
                if (textNode.nodeValue.includes(text)) {
                  node = textNode;
                  break;
                }
              }
            }

            if (!node) {
              console.warn('Could not find text node for highlight segment:', seg);
              return;
            }
          }

          let s = typeof seg.startOffset === 'number' ? seg.startOffset : 0;
          let e = typeof seg.endOffset === 'number' ? seg.endOffset : node.length;
          s = Math.max(0, Math.min(s, node.length));
          e = Math.max(s, Math.min(e, node.length));

          if ((e > node.length || s >= e || e <= 0) && seg.content) {
            const idx = node.nodeValue.indexOf(seg.content);
            if (idx !== -1) {
              s = idx;
              e = idx + seg.content.length;
            }
          }

          if (s < e && e <= node.length) {
            if (node.parentNode?.dataset?.highlighted === 'true') {
              console.log('Segment already highlighted, skipping:', seg.content, s, e);
              return;
            }

            const range = document.createRange();
            range.setStart(node, s);
            range.setEnd(node, e);

            const highlightSpan = document.createElement('span');
            highlightSpan.style.backgroundColor = hexToRgba(color, 0.24);
            highlightSpan.style.borderRadius = '4px';
            highlightSpan.dataset.highlighted = 'true';

            try {
              const contents = range.extractContents();
              highlightSpan.appendChild(contents);
              range.insertNode(highlightSpan);
              console.log('Applied highlight segment:', seg.content, 'at offsets', s, e, 'in segment', segIdx);
            } catch (err) {
              console.warn('Highlight insertion failed, fallback. Error:', err);
              range.deleteContents();
              range.insertNode(highlightSpan);
            }
          } else {
            console.warn('Invalid offsets for highlight segment:', seg, 'node.length:', node.length);
          }
        });

      // Case 2: highlightRange
      } else if (note.highlightRange?.startXPath && note.highlightRange?.endXPath) {
        let node = getTextNodeFromXPathAndOffset(
          note.highlightRange.startXPath,
          note.highlightRange.startOffset,
          note.content
        );

        if (!node) {
          const text = note.content;
          const walker = document.createTreeWalker(mainContent, NodeFilter.SHOW_TEXT, null, false);
          let textNode;
          while ((textNode = walker.nextNode())) {
            if (textNode.nodeValue.includes(text)) {
              node = textNode;
              break;
            }
          }
          if (!node) {
            console.warn('Could not find text node for highlight:', note);
            return;
          }
        }

        let s = typeof note.highlightRange.startOffset === 'number' ? note.highlightRange.startOffset : 0;
        let e = typeof note.highlightRange.endOffset === 'number' ? note.highlightRange.endOffset : node.length;

        if (s < e && e <= node.length) {
          const range = document.createRange();
          range.setStart(node, s);
          range.setEnd(node, e);

          const span = document.createElement('span');
          span.style.backgroundColor = hexToRgba(color, 0.24);
          span.style.borderRadius = '4px';
          span.style.padding = '2px 4px';
          span.dataset.highlighted = 'true';

          try {
            const contents = range.extractContents();
            span.appendChild(contents);
            range.insertNode(span);
            console.log('Applied highlight:', note.content, 'at offsets', s, e);
          } catch (err) {
            console.warn('Highlight insertion failed, fallback. Error:', err);
            range.deleteContents();
            range.insertNode(span);
          }
        } else {
          console.warn('Invalid offsets for highlight:', note, 'node.length:', node.length);
        }

      // Case 3: legacy text search fallback
      } else {
        const text = note.content;
        const walker = document.createTreeWalker(mainContent, NodeFilter.SHOW_TEXT, null, false);
        let textNode;
        while ((textNode = walker.nextNode())) {
          const idx = textNode.nodeValue.indexOf(text);
          if (idx !== -1) {
            const range = document.createRange();
            range.setStart(textNode, idx);
            range.setEnd(textNode, idx + text.length);

            const span = document.createElement('span');
            span.style.backgroundColor = hexToRgba(color, 0.24);
            span.style.borderRadius = '4px';
            span.style.padding = '2px 4px';
            span.dataset.highlighted = 'true';

            try {
              const contents = range.extractContents();
              span.appendChild(contents);
              range.insertNode(span);
              console.log('Applied legacy highlight:', note.content);
            } catch (err) {
              console.warn('Legacy highlight failed, fallback. Error:', err);
              range.deleteContents();
              range.insertNode(span);
            }
            break;
          }
        }
      }
    });
}

  function hexToRgba(hex, alpha = 0.24) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
  }

  return (
    <ClickAwayListener
      onClickAway={(event) => {
        // Only minimize if click is truly outside the tabpanel, popups, and open button
        const tabPanel = document.querySelector('[role="tabpanel"]');
        const myNotesPopper = document.querySelector('[role="dialog"]');
        const createNotePopup = document.getElementById('new-note-popup');
        const myNotesBtn = document.getElementById('my-notes-btn');
        if ((tabPanel && tabPanel.contains(event.target)) ||
            (myNotesPopper && myNotesPopper.contains(event.target)) ||
            (createNotePopup && createNotePopup.contains(event.target)) ||
            (myNotesBtn && myNotesBtn.contains(event.target))) {
          return;
        }
        if (typeof onClose === 'function') onClose();
      }}
    >
      <>
        <Popper open={open} anchorEl={anchorEl} placement="top-start" 
          sx={{ zIndex: 1000, width: 236 }}
          modifiers={[{ name: 'offset', options: { offset: [-(anchorEl ? anchorEl.offsetLeft : 0), -40] } }]}
          role="dialog"
          aria-labelledby="notes-dialog-title"
        >
          <Paper 
          sx={{ width: '236px', minHeight:188, maxHeight: 458,  border: '1px solid #DCDCDC', borderRadius: 2,display: 'flex', flexDirection: 'column',p: 0,}} >
            <Box sx={{
                width: 236,
                height: 116,
                maxHeight: 116,
                borderBottom: '1px solid #DCDCDC',
                px: 1.5,  // 12px horizontal padding
                py: 2,    // 16px vertical padding
                gap: '16px',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box', // IMPORTANT to keep padding inside total height
              }}
              role="tabpanel"
              id="tabpanel"
              aria-labelledby="notes-tab"
              hidden={tabValue !== 0}
              >

              <Box display="flex" 
                  justifyContent="space-between" 
                  alignItems="center" 
                  sx={{width: '100%',
                    height: 24,
                    flexShrink: 0,}}
                    id="notes-dialog-Box"
                    >
                <Typography display="flex" alignItems="center"
                  sx={{
                    minWidth: 0,
                    minHeight: 44,
                    textTransform: 'none',
                    flex: 1,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily: 'Work Sans, sans-serif',
                    fontSize: 16,
                  }}
                  id="notes-dialog-title"
                  aria-label="My Notes"
                  tabIndex={0} // Make it focusable
                >
                  <span style={{  width: 24, height: 24, marginRight: 8, display: 'inline-flex', alignItems: 'center' }}>{righticon}</span> MY NOTES
                </Typography>
                <IconButton onClick={onClose} sx={{ ml: 1, p: '4px' }}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Tabs
                value={tabValue}
                aria-label="Notes navigation tabs"
                onChange={(_, newValue) => setTabValue(newValue)}
                variant="fullWidth"
                TabIndicatorProps={{
                          sx: {
                            backgroundColor: '#3942B0',
                            height: '4px',
                          },
                        }}
                sx={{
                  minHeight: 48,
                  '& .MuiTabs-flexContainer': {
                    justifyContent: 'space-between',
                    fontFamily: 'Work Sans, sans-serif',
                  },
                }}
              >
                <Tab label="All" 
                    id="notes-All-tab"
                    aria-selected={tabValue === 0}
                    aria-controls="tabpanel-All"
                    tabIndex={0}
                    sx={{
                      p: 0,
                      minWidth: 43,
                      minHeight: 44,
                      fontFamily: 'Work Sans, sans-serif',
                      fontSize: '0.875rem',
                      textTransform: 'none',
                      color: '#707070',
                      '&.Mui-selected': {
                        color: '#3942B0',
                      },
                      '& .MuiTab-wrapper': {
                          pb: '4px', // controls spacing between text and indicator
                        },
                    }}
                />
                <Tab label="Notes" 
                    id="notes-Notes-tab"
                    aria-selected={tabValue === 1}
                    aria-controls="tabpanel-Notes"
                    tabIndex={0}
                  sx={{
                      p: 0,
                      minWidth: 64,
                      minHeight: 44,
                      fontSize: '0.875rem',
                      fontFamily: 'Work Sans, sans-serif',
                      textTransform: 'none',
                      color: '#707070',
                      '&.Mui-selected': {
                        color: '#3942B0',
                      },
                    }}
                />
                <Tab label="Highlights" 
                    id="notes-Highlights-tab"
                    aria-selected={tabValue === 2}
                    aria-controls="tabpanel-Highlights"
                    tabIndex={0}
                  sx={{
                      p: 0,
                      minWidth: 93,
                      minHeight: 44,
                      fontSize: '0.875rem',
                      textTransform: 'none',
                      fontFamily: 'Work Sans, sans-serif',
                      color: '#707070',
                      '&.Mui-selected': {
                        color: '#3942B0',
                      },
                    }}
                />
              </Tabs>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center', // center horizontally
                width: '100%', // take full width of the Paper
                flexGrow: 1, // optional: fill available vertical space
              }}
            >
            
              <Box
                sx={{
                  width: 212,
                  maxHeight: 342,
                  p: 0,
                  // gap: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start', // you can use "center" if you want vertical centering too
                  opacity: 1,
                }}
              >
              {tabValue !== 2 && (
                <Button
                  startIcon={<AddIcon />}
                  variant="outlined"
                  fullWidth
                  sx={{
                    my: 2,
                    width: 212,
                    height: 40,
                    textTransform: 'none',
                    fontFamily: 'Work Sans, sans-serif',
                    fontSize: 16,
                    borderColor: '#D4D4D4',
                    borderRadius: 2, // MUI spacing for 8px radius (2 * 4px)
                    backgroundColor: '#FFFFFF',
                    color: '#454545',
                    '&:hover': {
                      backgroundColor: '#F0F0F0',
                      borderColor: '#D4D4D4',
                    },
                  }}
                  onClick={handleOpenPopup}
                >
                  Create new Note
                </Button>
              )}
              
              {notes.length > 0 && (
                <Box sx={{ width:212 , maxHeight: 254, overflowY: 'auto', mt: tabValue !== 2 ? 0 : '16px', }}>
                  {notes
                    .filter((note) => {
                      if (tabValue === 0) return true;
                      if (tabValue === 1) return note.note_section === 1;
                      if (tabValue === 2) return note.note_section === 2;
                      return false;
                    })
                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) // Sort by timestamp (new to old)
                    .map((note, index) => {
                      const prefix = note.note_section === 2 ? 'HIGHLIGHT' : 'YOUR NOTES';
                      return (
                        <Paper
                          key={index}
                          sx={{
                            p: 2,
                            mb: 1,
                            borderRadius: 2,
                            borderLeft: `4px solid ${note.highlightColor|| note.sectionColor}`, // Use the selected color
                            cursor: 'default',
                            fontFamily: 'Work Sans, sans-serif',
                          }}
                        >
                          {/* <Typography variant="body1" sx={{fontFamily: 'Work Sans, sans-serif',fontSize:14}}>{note.content}</Typography> */}
                          <Typography 
                            variant="body1" 
                            sx={{ fontFamily: 'Work Sans, sans-serif' }}
                            dangerouslySetInnerHTML={{ __html: note.content }}
                          />

                          <Typography variant="caption" sx={{ color: note.highlightColor || note.sectionColor, fontFamily: 'DM Sans',fontSize:12, fontWeight: 600 }}>
                            {prefix}
                          </Typography>
                          <br />
                        </Paper>
                      );
                    })}
                </Box>
              )}
              </Box>
            </Box>
          </Paper>
        </Popper>

        {isDialogOpen && (
          <ClickAwayListener
            onClickAway={(event) => {
              const popup = document.getElementById('new-note-popup');
              if (popup && popup.contains(event.target)) return;
              setIsDialogOpen(false);
            }}
          >
            <Draggable nodeRef={draggableRef} handle=".drag-handle">
              <div
                id="new-note-popup"
                ref={draggableRef}
                style={{
                  position: 'fixed',
                  top: '20%',
                  left: '40%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1500,
                  pointerEvents: 'auto',
                }}
              >
                <Paper
                  sx={{
                    width: isExpanded ? 1000 : 284,
                    height: isExpanded ? 650 : 276,
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: 3,
                    p: 2,
                    overflow: 'auto',
                    fontFamily: 'Work Sans, sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Header (Drag Handle) */}
                  <Box
                    className="drag-handle"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ cursor: 'move' }}
                  >
                    <Typography variant="h6">
                      New Notes
                    </Typography>
                    <IconButton onClick={() => setIsExpanded(prev => !prev)}>
                      <span
                        style={{
                          width: 24,
                          height: 24,
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        {isExpanded ? collapseIcon : expandIcon}
                      </span>
                    </IconButton>
                  </Box>

                {/* Highlight Display */}
                {highlights.length > 0 && (
                  <Box mt={1}>
                    {highlights
                      .filter(
                        h => h.section === selectedSection && h.tab === selectedSidebarTab
                      )
                      .map((highlight, index) => (
                        <Typography
                          key={index}
                          sx={{
                            backgroundColor: hexToRgba(highlight.color, 0.24),
                            borderRadius: '4px',
                            padding: '2px 4px',
                            display: 'inline-block',
                            marginBottom: '4px',
                          }}
                        >
                          {highlight.text}
                        </Typography>
                      ))}
                  </Box>
                )}

                {/* Tiptap Editor */}
                <Box
                  sx={{
                    flexGrow: 1,
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '8px',
                    mt: 2,
                    overflowY: 'auto',
                    position: 'relative', // for placeholder overlay
                    '& .ProseMirror': {
                      outline: 'none',
                      minHeight: isExpanded ? '450px' : '150px',
                    },
                    '& .ProseMirror p.is-editor-empty:first-child::before': {
                      color: '#adb5bd',
                      content: 'attr(data-placeholder)',
                      float: 'left',
                      height: 0,
                      pointerEvents: 'none',
                    },
                  }}
                >
                  {(!noteContent || noteContent === '<p></p>') && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        color: '#adb5bd',
                        pointerEvents: 'none',
                        fontFamily: 'Work Sans, sans-serif',
                        fontSize: 14,
                        zIndex: 1,
                      }}
                    >
                      Write your note here
                    </div>
                  )}
                  <Tiptap
                    value={noteContent}
                    onChange={setNoteContent}
                    placeholder="Write your note here"
                    editorProps={{
                      attributes: {
                        class: 'tiptap-editor',
                        'data-placeholder': 'Write your note here',
                      },
                    }}
                  />
                </Box>

                {/* Save Button */}
                <Box display="flex" justifyContent="flex-start" mt={2}>
                  <Button
                    onClick={handleSaveNote}
                    variant="contained"
                    sx={{
                      width: '48px',
                      height: '28px',
                      background: 'white',
                      textTransform: 'none',
                      border: '1px solid #D4D4D4',
                      color: '#454545',
                      fontFamily: 'Work Sans, sans-serif',
                      boxShadow: 'none',
                      '&:hover': {
                        background: '#f0f0f0',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Paper>
            </div>
          </Draggable>
          </ClickAwayListener>
        )}

        {isSelectionDialogOpen && (
         <ClickAwayListener 
         onClickAway={(event) => {
           const isClickInsideDialog = event.target.closest('.MuiTabs-root') || event.target.closest('.MuiTab-root');
           if (!isClickInsideDialog) {
             setIsSelectionDialogOpen(false);
           }
         }}
       >
          <Draggable nodeRef={draggableRef}>
            <Paper
                id="new-note-popup"
                ref={draggableRef}
                sx={{
                  position: 'fixed',
                  top: '20%',
                  left: '30%',
                  width: 312,
                  height: 130,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1500,
                  pointerEvents: 'auto',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'none',
                  p: 0,
                }}
              >
              <Paper
                sx={{
                  width: 312, // increased width
                  height: 68, // increased height
                  p: 2, // 16px padding for better internal spacing
                  gap: 1.5, // 12px gap between children
                  backgroundColor: '#FFFFFF', // fill
                  border: '1px solid #DCDCDC', // stroke
                  boxShadow: 3,
                  borderRadius: '8px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Tabs
                  value={popupTabValue}
                  onChange={(_, newValue) => setPopupTabValue(newValue)}
                  variant="fullWidth"
                  TabIndicatorProps={{
                    sx: {
                      bottom: 6, // adjust indicator closer to text
                      height: '3px',
                      backgroundColor: '#3942B0',
                    },
                  }}
                  sx={{
                    minHeight: '44px',
                  }}
                >
                  <Tab
                    label="Highlight"
                    icon={
                      <span
                        style={{
                          width: 24,
                          height: 24,
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        {popupTabValue === 0 ? selectedhilight_alt : highlight_img}
                      </span>
                    }
                    iconPosition="start"
                    sx={{
                      minHeight: '44px',
                      minWidth: '50%',
                      textTransform: 'none',
                      color: '#707070',
                      '&.Mui-selected': { color: '#3942B0' },
                      fontFamily: 'Work Sans, sans-serif',
                    }}
                  />
                  <Tab
                    label="Take Notes"
                    icon={
                      <span
                        style={{
                          width: 24,
                          height: 24,
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        {popupTabValue === 0 ? vector_img : selectedvector}
                      </span>
                    }
                    iconPosition="start"
                    sx={{
                      minHeight: '44px',
                      minWidth: '50%',
                      textTransform: 'none',
                      color: '#707070',
                      '&.Mui-selected': { color: '#3942B0' },
                      fontFamily: 'Work Sans, sans-serif',
                    }}
                  />
                </Tabs>
              </Paper>
              <Paper
                sx={{
                  width: 312,
                  height: popupTabValue === 0 ? 52 : 276,
                  px: 1.5, // horizontal padding (left & right)
                  py: 1.5, // vertical padding (top & bottom)
                  boxShadow: 3,
                  borderRadius: '8px',
                  border: '1px solid #DCDCDC',
                  backgroundColor: '#FFFFFF',
                  boxSizing: 'border-box',  
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // Center content vertically
                  mt: 1.1,
                }}
              >
                <Box mt={2}>
                  {popupTabValue === 0 && (
                    <Box 
                      display="flex"
                      flexDirection="row"
                      alignItems="start"
                      justifyContent="flex-start"
                      gap="29px" 
                      sx={{ mb: 2 }}
                    >
                      <Box
                        sx={{
                            width: '52px',
                            height: '28px',
                            borderRadius: '12px', // 12*12 corner radius
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #D4D4D4',
                            padding: '6px 8px', // 6px vertical, 8px horizontal
                            gap: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'Work Sans, sans-serif',
                            boxSizing: 'border-box', // ensures padding is included in total size
                          }}
                        onClick={() => {
                          setSelectedColor(null);
                          if (selectionNoteContent) {
                            setNotes((prevNotes) => {
                              const updated = prevNotes.filter(
                                (note) => !(note.content === selectionNoteContent && note.section === selectedSection && note.tab === selectedSidebarTab)
                              );
                              localStorage.setItem('highlightedNotes', JSON.stringify(updated));
                              return updated;
                            });
                            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, null, false);
                            let node;
                            while ((node = walker.nextNode())) {
                              if (
                                node.tagName === 'SPAN' &&
                                node.textContent === selectionNoteContent
                              ) {
                                const textNode = document.createTextNode(selectionNoteContent);
                                node.parentNode.replaceChild(textNode, node);
                                break;
                              }
                            }
                          }
                          setIsSelectionDialogOpen(false);
                          setSelectionNoteContent('');
                        }}
                      >
                        <Typography fontSize={12} color="black">
                          None
                        </Typography>
                      </Box>

                      {['#b84d84', '#67BC46', '#F89B1B', '#009FDA'].map((colorOption) => (
                        <Box
                          key={colorOption}
                          sx={{
                            width: 27,
                            height: 27,
                            borderRadius: '4px',
                            backgroundColor: colorOption,
                            border: selectedColor === colorOption ? '3px solid black' : '1px solid #ccc',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleSelectionColor(colorOption)}
                          >
                          <Box
                            sx={{
                              width: 21, // a bit smaller than 27 - 2*border - 2*gap
                              height: 21,
                              borderRadius: '2px',
                              backgroundColor: colorOption,
                            }}
                          />
                          </Box>
                        
                      ))}
                    </Box>
                    
                  )}
                  
                  {highlights.length > 0 && (
                    <Box mt={2}>
                      {highlights
                        .filter(h => h.section === selectedSection && h.tab === selectedSidebarTab)
                        .map((highlight, index) => (
                          <Typography
                            key={index}
                            sx={{
                              backgroundColor: hexToRgba(highlight.color, 0.24),
                              borderRadius: '4px',
                              padding: '2px 4px',
                              display: 'inline-block',
                              marginBottom: '4px',
                            }}
                          >
                            {highlight.text}
                          </Typography>
                        ))}
                    </Box>
                  )}
                  {popupTabValue === 1 && (
                    
                    <Box>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle1">New Notes</Typography>
                        <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                          <span style={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center' }}>{isExpanded ? collapseIcon : expandIcon}</span>
                        </IconButton>
                      </Box>
                      
                      {!isExpanded && (
                        <>
                          <Box sx={{
                                    width: 288,
                                    height: 176,
                                    border: '1px solid #DCDCDC',
                                    borderRadius: '4px',
                                    padding: '8px',
                                    boxSizing: 'border-box',
                                    '& .tiptap-editor': {
                                      minHeight: '100%',
                                      outline: 'none',
                                    },
                                    '& .ProseMirror': {
                                      minHeight: '100%',
                                      outline: 'none',
                                    },
                                    '& .ProseMirror p.is-editor-empty:first-child::before': {
                                      color: '#adb5bd',
                                      content: 'attr(data-placeholder)',
                                      float: 'left',
                                      height: 0,
                                      pointerEvents: 'none',
                                      fontFamily: 'Work Sans, sans-serif',
                                      fontSize: '14px',
                                    },
                                  }}>
                            <Tiptap
                              value={noteContent}
                              onChange={setNoteContent}
                              placeholder="Write your note here"
                            />
                          </Box>
                          <Box display="flex" justifyContent="flex-start" mt={0}>
                            <Button onClick={handleSaveNote} variant="contained"
                            sx={{ my: 1, 
                              width: '48px',height: '28px',border:'1px',background:'white',
                              textTransform: 'none', borderColor: '#D4D4D4',color:"#454545",
                            fontFamily: 'Work Sans, sans-serif',}}
                            >
                              Save
                            </Button>
                          </Box>
                        </>
                        
                      )}

                      {isExpanded && (
                        <Dialog
                          open={isExpanded}
                          onClose={() => setIsExpanded(false)}
                          fullScreen
                          sx={{
                            zIndex: 2000,
                            '& .MuiDialog-paper': {
                              backgroundColor: 'rgba(0, 0, 0, 0.3)',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              margin: 0, 
                            },
                          }}
                        >
                          {/* Centered Popup Box */}
                          <Box
                            sx={{
                              width: 1000,
                              height: 650,
                              backgroundColor: '#fff',
                              borderRadius: '8px',
                              boxShadow: 24,
                              display: 'flex',
                              flexDirection: 'column',
                              padding: 2,
                              fontFamily: 'Work Sans, sans-serif',
                            }}
                          >
                            {/* Header */}
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{ marginBottom: 2 }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: '18px',
                                  fontWeight: 'bold',
                                  fontFamily: 'Work Sans, sans-serif',
                                }}
                              >
                                New Notes
                              </Typography>
                              <IconButton
                                onClick={() => setIsExpanded(false)}
                                sx={{
                                  padding: '4px',
                                  marginLeft: 'auto',
                                }}
                              >
                                <span
                                  style={{
                                    width: 24,
                                    height: 24,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  {isExpanded ? collapseIcon : expandIcon}
                                </span>
                              </IconButton>
                            </Box>

                            {/* Tiptap Editor */}
                            <Box
                              sx={{
                                flexGrow: 1,
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                padding: '8px',
                                fontFamily: 'Work Sans, sans-serif',
                                overflow: 'auto',
                                '& .tiptap-editor': {
                                  minHeight: '100%',
                                },
                                '& .toolbar': {
                                  display: 'flex',
                                  gap: '4px',
                                  padding: '4px',
                                  borderBottom: '1px solid #eee',
                                  marginBottom: '8px',
                                },
                                '& button': {
                                  background: '#f5f5f5',
                                  border: '1px solid #ddd',
                                  borderRadius: '3px',
                                  padding: '4px 8px',
                                  cursor: 'pointer',
                                },
                                '& button.is-active': {
                                  background: '#ddd',
                                },
                                '& .ProseMirror': {
                                  minHeight: '450px',
                                  outline: 'none',
                                },
                                '& .ProseMirror p.is-editor-empty:first-child::before': {
                                  color: '#adb5bd',
                                  content: 'attr(data-placeholder)',
                                  float: 'left',
                                  height: 0,
                                  pointerEvents: 'none',
                                },
                              }}
                            >
                              <Tiptap
                                value={noteContent}
                                onChange={setNoteContent}
                                placeholder="Write your note here"
                              />
                            </Box>

                            {/* Actions */}
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                paddingTop: '12px',
                              }}
                            >
                              <Button
                                onClick={handleSaveNote}
                                variant="contained"
                                sx={{
                                  width: '48px',
                                  height: '28px',
                                  background: 'white',
                                  textTransform: 'none',
                                  border: '1px solid #D4D4D4',
                                  color: '#454545',
                                  fontFamily: 'Work Sans, sans-serif',
                                  boxShadow: 'none',
                                  '&:hover': {
                                    background: '#f0f0f0',
                                    boxShadow: 'none',
                                  },
                                }}
                              >
                                Save
                              </Button>
                            </Box>
                          </Box>
                        </Dialog>
                      )}
    
                    </Box>
                  )}
                </Box>
                
              </Paper>
            </Paper>
          </Draggable>
          </ClickAwayListener>
        )}
      </>
    </ClickAwayListener>
  );
};

export default Notes;
