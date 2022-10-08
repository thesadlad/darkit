import colors from './colors.js';

const workbenchStyles = {
    foreground: colors.slate[200],
    focusBorder: colors.slate[500],
    'widget.shadow': colors.slate[900],
    'activityBar.background': colors.darkBlue[700],
    'activityBar.foreground': colors.darkBlue[100],
    'activityBar.inactiveForeground': colors.darkBlue[600],
    'activityBarBadge.background': colors.darkBlue[600],
    'activityBarBadge.foreground': colors.slate[100],
    'activityBar.border': colors.transparent,
    'activityBar.activeBackground': colors.transparent,
    'sideBar.background': colors.darkBlue[700],
    'sideBar.foreground': colors.darkBlue[300],
    'sideBar.border': colors.darkBlue[900],
    'sideBarSectionHeader.background': colors.darkBlue[700],
    'sideBarSectionHeader.foreground': colors.darkBlue[100],
    'sideBarSectionHeader.border': colors.darkBlue[900],
    'sideBarTitle.foreground': colors.darkBlue[100],
    'list.inactiveSelectionBackground': colors.darkBlue[600],
    'list.inactiveSelectionForeground': colors.darkBlue[50],
    'list.focusOutline': colors.transparent,
    'list.hoverBackground': colors.darkBlue[600],
    'list.hoverForeground': colors.darkBlue[100],
    'list.activeSelectionBackground': colors.darkBlue[600],
    'list.activeSelectionForeground': colors.darkBlue[50],
    'list.dropBackground': colors.darkBlue[600],
    'list.highlightForeground': colors.emerald[300],
    'list.focusBackground': colors.darkBlue[700],
    'list.focusForeground': colors.slate[200],
    'listFilterWidget.background': colors.darkBlue[600],
    'listFilterWidget.noMatchesOutline': colors.red[500],
    'listFilterWidget.outline': colors.transparent,
    'list.warningForeground': colors.orange[300],
    'list.errorForeground': colors.roseRed[500],
    'tree.indentGuidesStroke': colors.transparent,
    'statusBar.background': colors.darkBlue[700],
    'statusBar.foreground': colors.slate[200],
    'statusBar.border': colors.darkBlue[900],
    'statusBar.debuggingBackground': colors.darkBlue[600],
    'statusBar.debuggingForeground': colors.slate[100],
    'statusBar.debuggingBorder': colors.darkBlue[900],
    'statusBar.noFolderBackground': colors.darkBlue[700],
    'statusBar.noFolderForeground': colors.slate[200],
    'statusBar.noFolderBorder': colors.darkBlue[900],
    'titleBar.activeBackground': colors.darkBlue[700],
    'titleBar.activeForeground': colors.darkBlue[300],
    'titleBar.border': colors.darkBlue[900],
    'titleBar.inactiveBackground': colors.darkBlue[700],
    'titleBar.inactiveForeground': colors.darkBlue[500],
    'menubar.selectionBackground': colors.darkBlue[600],
    'menubar.selectionForeground': colors.darkBlue[300],
    'menubar.selectionBorder': colors.transparent,
    'menu.background': colors.darkBlue[700],
    'menu.foreground': colors.slate[200],
    'menu.selectionBackground': colors.darkBlue[600],
    'menu.selectionForeground': colors.darkBlue[100],
    'menu.selectionBorder': colors.transparent,
    'menu.separatorBackground': colors.darkBlue[500],
    'menu.border': colors.darkBlue[900],
    'button.background': colors.darkBlue[500],
    'button.foreground': colors.slate[200],
    'button.hoverBackground': colors.darkBlue[400],
    'button.secondaryBackground': colors.slate[800],
    'button.secondaryForeground': colors.slate[200],
    'textLink.foreground': colors.emerald[300],
    'input.background': colors.darkBlue[700],
    'input.foreground': colors.slate[200],
    'input.border': colors.darkBlue[600],
    'input.placeholderForeground': colors.slate[500],
    'inputOption.activeBackground': colors.transparent,
    'inputOption.activeForeground': colors.slate[50],
    'inputOption.activeBorder': colors.transparent,
    'panel.background': colors.darkBlue[700],
    'panel.border': colors.darkBlue[900],
    'panelTitle.activeBorder': colors.darkBlue[200],
    'panelTitle.activeForeground': colors.darkBlue[100],
    'terminal.selectionBackground': colors.darkBlue[600],
    'terminal.border': colors.darkBlue[900],
    'terminal.foreground': colors.darkBlue[100],
    'terminal.ansiWhite': colors.slate[400],
    'terminal.ansiBrightWhite': colors.slate[200],
    'terminal.ansiBlack': colors.slate[900],
    'terminal.ansiBrightBlack': colors.slate[600],
    'terminal.ansiBlue': colors.blue[500],
    'terminal.ansiBrightBlue': colors.blue[300],
    'terminal.ansiCyan': colors.turquoise[600],
    'terminal.ansiBrightCyan': colors.turquoise[400],
    'terminal.ansiGreen': colors.emerald[400],
    'terminal.ansiBrightGreen': colors.emerald[300],
    'terminal.ansiMagenta': colors.purple[400],
    'terminal.ansiBrightMagenta': colors.purple[300],
    'terminal.ansiRed': colors.roseRed[400],
    'terminal.ansiBrightRed': colors.roseRed[300],
    'terminal.ansiYellow': colors.greenYellow[400],
    'terminal.ansiBrightYellow': colors.greenYellow[300],
    'terminalCursor.background': colors.darkBlue[900],
    'terminalCursor.foreground': colors.darkBlue[300],
    'badge.background': colors.darkBlue[600],
    'badge.foreground': colors.slate[50],
    'editorGroupHeader.border': colors.transparent,
    'editorGroupHeader.tabsBackground': colors.darkBlue[700],
    'editorGroupHeader.tabsBorder': colors.darkBlue[900],
    'tab.border': colors.transparent,
    'tab.activeBackground': colors.darkBlue[600],
    'tab.activeForeground': colors.slate[100],
    'tab.activeBorder': colors.transparent,
    'tab.activeBorderTop': colors.transparent,
    'tab.inactiveBackground': colors.darkBlue[700],
    'tab.inactiveForeground': colors.darkBlue[300],
    'breadcrumb.background': colors.darkBlue[700],
    'breadcrumb.foreground': colors.darkBlue[300],
    'breadcrumb.focusForeground': colors.darkBlue[50],
    'scrollbarSlider.background': colors.darkBlue[800],
    'scrollbarSlider.hoverBackground': colors.darkBlue[600],
    'scrollbarSlider.activeBackground': colors.darkBlue[600],
    'scrollbar.shadow': colors.darkBlue[900],
    'editorWidget.background': colors.darkBlue[800],
    'editorWidget.foreground': colors.slate[500],
    'editorWidget.resizeBorder': colors.darkBlue[300],
    'debugToolBar.background': colors.darkBlue[600],
    'debugToolBar.border': colors.darkBlue[800],
    'debugIcon.continueForeground': colors.turquoise[300],
    'debugIcon.restartForeground': colors.blue[300],
    'debugIcon.disconnectForeground': colors.roseRed[400],
    'debugIcon.stepOverForeground': colors.indigo[300],
    'debugIcon.stepIntoForeground': colors.indigo[300],
    'debugIcon.stepOutForeground': colors.indigo[300],
    'notifications.background': colors.darkBlue[700],
    'notifications.foreground': colors.slate[200],
    'notificationLink.foreground': colors.emerald[300],
    'notificationToast.border': colors.darkBlue[800],
    'gitDecoration.addedResourceForeground': colors.turquoise[300],
    'gitDecoration.modifiedResourceForeground': colors.orange[200],
    'gitDecoration.deletedResourceForeground': colors.roseRed[400],
    'gitDecoration.renamedResourceForeground': colors.emerald[400],
    'gitDecoration.stageModifiedResourceForeground': colors.orange[200],
    'gitDecoration.stageDeletedResourceForeground': colors.roseRed[400],
    'gitDecoration.untrackedResourceForeground': colors.turquoise[300],
    'gitDecoration.ignoredResourceForeground': colors.darkBlue[600],
    'editor.background': colors.darkBlue[700],
    'editor.foreground': colors.slate[200],
    'editorLineNumber.foreground': colors.darkBlue[600],
    'editorLineNumber.activeForeground': colors.darkBlue[300],
    'editorCursor.foreground': colors.darkBlue[50],
    'editorCursor.background': colors.darkBlue[50],
    'editor.selectionBackground': colors.darkBlue[600],
    'editor.inactiveSelectionBackground': colors.darkBlue[700],
    'editor.selectionHighlightBackground': colors.transparent,
    'editor.findMatchBackground': colors.darkBlue[500],
    'editor.findMatchBorder': colors.darkBlue[100],
    'editor.findMatchHighlightBackground': colors.darkBlue[500],
    'editor.findRangeHighlightBackground': colors.darkBlue[500],
    'editor.rangeHighlightBackground': colors.darkBlue[600],
    'editor.hoverHighlightBackground': `${colors.darkBlue[500]}55`,
    'editor.wordHighlightBackground': colors.darkBlue[500],
    'editor.lineHighlightBackground': colors.darkBlue[600],
    'editorIndentGuide.background': colors.darkBlue[600],
    'editorIndentGuide.activeBackground': colors.darkBlue[500],
    'editorRuler.foreground': colors.darkBlue[900],
    'editorBracketMatch.background': colors.darkBlue[600],
    'editorBracketMatch.border': colors.darkBlue[500],
    'peekViewEditor.background': colors.darkBlue[700],
    'peekView.border': colors.darkBlue[900],
    'peekViewResult.background': colors.darkBlue[700],
    'peekViewTitle.background': colors.darkBlue[700],
    'minimap.findMatchHighlight': colors.darkBlue[500],
    'minimap.selectionOccurrenceHighlight': colors.slate[300],
};

export default workbenchStyles;
