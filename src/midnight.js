import Color from 'color';
import colors from './colors.js';

const text = {
	highlight: Color(colors.slate[50]).hex(),
	base: Color(colors.slate[300]).hex(),
	dimmed: Color(colors.slate[600]).hex(),
};
const bg = {
	editor: Color(colors.violet[500]).darken(0.75).desaturate(0.65).hex(),
	blocks: Color(colors.violet[500]).darken(0.8).desaturate(0.65).hex(),
};
const border = Color(colors.violet[500]).darken(0.85).desaturate(0.65).hex();
const accent = Color(colors.violet[500]).hex();

const midnightTheme = {
	name: 'Darkit Midnight',
	semanticHighlighting: true,
	colors: {
		foreground: '#787c99',
		descriptionForeground: '#545c7e',
		focusBorder: '#545c7e33',
		errorForeground: '#5a607d',
		'widget.shadow': '#ffffff00',
		'scrollbar.shadow': '#00000033',
		'badge.background': '#7e83b233',
		'badge.foreground': '#a9b1d6',
		'icon.foreground': '#7982a9',
		'settings.headerForeground': '#6183bb',
		'window.activeBorder': '#0d0f17',
		'window.inactiveBorder': '#0d0f17',
		'sash.hoverBorder': '#29355a',

		'toolbar.activeBackground': '#2c324a',
		'toolbar.hoverBackground': '#2c324a',

		'extensionButton.prominentBackground': '#3d59a1DD',
		'extensionButton.prominentHoverBackground': '#3d59a1AA',
		'extensionButton.prominentForeground': '#ffffff',
		'extensionBadge.remoteBackground': '#3d59a1',
		'extensionBadge.remoteForeground': '#ffffff',

		'button.background': bg.editor,
		'button.hoverBackground': '#3d59a1AA',
		'button.secondaryBackground': '#41496b',
		'button.foreground': '#ffffff',
		'progressBar.background': '#3d59a1',

		'input.background': '#1b1e2e',
		'input.foreground': '#a9b1d6',
		'input.border': '#282e44',
		'input.placeholderForeground': '#4a5272',
		'inputOption.activeForeground': '#c0caf5',
		'inputOption.activeBackground': '#3d59a144',

		'inputValidation.infoForeground': '#bbc2e0',
		'inputValidation.infoBackground': '#3d59a15c',
		'inputValidation.infoBorder': '#3d59a1',
		'inputValidation.warningForeground': '#000000',
		'inputValidation.warningBackground': '#c2985b',
		'inputValidation.warningBorder': '#e0af68',
		'inputValidation.errorForeground': '#bbc2e0',
		'inputValidation.errorBackground': '#85353e',
		'inputValidation.errorBorder': '#963c47',

		'dropdown.foreground': '#7982a9',
		'dropdown.background': bg.blocks,
		'dropdown.listBackground': '#1b1e2e',

		'activityBar.background': bg.blocks,
		'activityBar.foreground': '#7982a9',
		//"activityBar.activeBorder": "#41496b",
		//"activityBar.activeBackground": "#1c2030",
		'activityBar.inactiveForeground': '#41496b', //#3b4261
		'activityBar.border': border,
		'activityBarBadge.background': '#3d59a1',
		'activityBarBadge.foreground': '#fff',

		'tree.indentGuidesStroke': '#2e344f',
		'sideBar.foreground': '#7982a9',
		'sideBar.background': bg.blocks,
		'sideBar.border': border,
		'sideBarTitle.foreground': '#7982a9',
		'sideBarSectionHeader.background': bg.blocks,
		'sideBarSectionHeader.foreground': '#a9b1d6',
		'sideBarSectionHeader.border': border,
		'sideBar.dropBackground': '#292e42',

		'list.dropBackground': '#292e42',
		'list.deemphasizedForeground': '#7982a9',
		'list.activeSelectionBackground': '#2c324a',

		'list.activeSelectionForeground': '#a9b1d6',
		'list.inactiveSelectionBackground': '#292e42',
		'list.inactiveSelectionForeground': '#a9b1d6',
		'list.focusBackground': '#292e42',
		'list.focusForeground': '#a9b1d6',
		'list.hoverBackground': '#1b1e2e',
		'list.hoverForeground': '#a9b1d6',

		'list.highlightForeground': '#668ac4',
		'list.invalidItemForeground': '#c97018',
		'list.errorForeground': '#bb616b',
		'list.warningForeground': '#c49a5a',

		'listFilterWidget.background': bg.blocks,
		'listFilterWidget.outline': '#3d59a1',
		'listFilterWidget.noMatchesOutline': '#a6333f',

		'pickerGroup.foreground': '#a9b1d6',
		'pickerGroup.border': '#1b1e2e',

		'scrollbarSlider.background': '#9cacff15',
		'scrollbarSlider.hoverBackground': '#9cacff10',
		'scrollbarSlider.activeBackground': '#9cacff22',

		'editorBracketHighlight.foreground1': '#698cd6', //"#7AA2F7",
		'editorBracketHighlight.foreground2': '#68b3de', //"#7DCFFF",
		'editorBracketHighlight.foreground3': '#9a7ecc', //"#BB9AF7",
		'editorBracketHighlight.foreground4': '#25aac2', //"#2AC3DE",
		'editorBracketHighlight.foreground5': '#80a856', //"#9ECE6A",
		'editorBracketHighlight.foreground6': '#cfa25f', //"#e0af68",
		'editorBracketHighlight.unexpectedBracket.foreground': '#db4b4b',

		'editorBracketPairGuide.activeBackground1': '#698cd6',
		'editorBracketPairGuide.activeBackground2': '#68b3de',
		'editorBracketPairGuide.activeBackground3': '#9a7ecc',
		'editorBracketPairGuide.activeBackground4': '#25aac2',
		'editorBracketPairGuide.activeBackground5': '#80a856',
		'editorBracketPairGuide.activeBackground6': '#cfa25f',

		'selection.background': '#6f7bb635',
		'editor.background': bg.editor,
		'editor.foreground': '#a9b1d6',
		'editor.foldBackground': '#181b294a',
		'editorLink.activeForeground': '#a9b1d6',

		'editor.selectionBackground': '#6f7bb640',
		'editor.inactiveSelectionBackground': '#6f7bb615',

		'editor.findMatchBackground': '#3d59a166',
		'editor.findMatchBorder': '#ffdb69aa',
		'editor.findMatchHighlightBackground': '#3d59a166',

		'editor.findRangeHighlightBackground': '#6f7bb625',
		'editor.rangeHighlightBackground': '#6f7bb620',
		'editor.wordHighlightBackground': '#6f7bb633',
		'editor.wordHighlightStrongBackground': '#6f7bb644',
		'editor.selectionHighlightBackground': '#6f7bb633',

		'editorCursor.foreground': '#c0caf5',
		'editorIndentGuide.background': '#292e42',
		'editorIndentGuide.activeBackground': '#3b4261',
		'editorLineNumber.foreground': '#3b4261',
		'editorLineNumber.activeForeground': '#737aa2',
		'editor.lineHighlightBackground': '#292e42',
		'editorWhitespace.foreground': '#3b4261',

		'editorMarkerNavigation.background': '#1f2335',
		'editorHoverWidget.background': '#1f2335',
		'editorHoverWidget.border': '#1b1e2e',

		'editorBracketMatch.background': '#1f2335',
		'editorBracketMatch.border': '#545c7e', //"#3b4261",

		'editorOverviewRuler.border': '#1b1e2e',
		'editorOverviewRuler.errorForeground': '#db4b4b',
		'editorOverviewRuler.warningForeground': '#e0af68',
		'editorOverviewRuler.infoForeground': '#1abc9c',
		'editorOverviewRuler.bracketMatchForeground': '#1b1e2e',
		'editorOverviewRuler.findMatchForeground': '#a9b1d644',
		'editorOverviewRuler.rangeHighlightForeground': '#a9b1d644',
		'editorOverviewRuler.selectionHighlightForeground': '#a9b1d622',
		'editorOverviewRuler.wordHighlightForeground': '#bb9af755',
		'editorOverviewRuler.wordHighlightStrongForeground': '#bb9af766',
		'editorOverviewRuler.modifiedForeground': '#3d547a',
		'editorOverviewRuler.addedForeground': '#164846',
		'editorOverviewRuler.deletedForeground': '#703438',

		'editorRuler.foreground': '#1b1e2e',
		'editorError.foreground': '#db4b4b',
		'editorWarning.foreground': '#e0af68',
		'editorInfo.foreground': '#0da0ba',
		'editorHint.foreground': '#0da0ba',

		'editorGutter.modifiedBackground': '#3d547a',
		'editorGutter.addedBackground': '#164846',
		'editorGutter.deletedBackground': '#823c41',

		'editorGhostText.foreground': '#7582ba',

		'minimapGutter.modifiedBackground': '#3d547a',
		'minimapGutter.addedBackground': '#1C5957',
		'minimapGutter.deletedBackground': '#944449',

		'editorGroup.border': '#1b1e2e',
		'editorGroup.dropBackground': '#292e42',
		'editorGroupHeader.tabsBorder': '#1b1e2e',
		'editorGroupHeader.tabsBackground': '#1f2335',
		'editorGroupHeader.noTabsBackground': '#1f2335',
		'editorGroupHeader.border': '#1b1e2e',

		'editorPane.background': '#1f2335',

		'editorWidget.foreground': '#7982a9',
		'editorWidget.background': '#1f2335',
		'editorWidget.resizeBorder': '#545c7e33',

		'editorSuggestWidget.background': '#1f2335',
		'editorSuggestWidget.border': '#1b1e2e',
		'editorSuggestWidget.selectedBackground': '#282e44',
		'editorSuggestWidget.highlightForeground': '#668ac4',

		'editorCodeLens.foreground': '#565f89',
		'editorLightBulb.foreground': '#e0af68',
		'editorLightBulbAutoFix.foreground': '#e0af68',

		'peekView.border': '#1b1e2e',
		'peekViewEditor.background': '#1f2335',
		'peekViewEditor.matchHighlightBackground': '#3d59a166',
		'peekViewTitle.background': '#1b1e2e',
		'peekViewTitleLabel.foreground': '#a9b1d6',
		'peekViewTitleDescription.foreground': '#7982a9',
		'peekViewResult.background': '#1b1e2e',
		'peekViewResult.selectionForeground': '#a9b1d6',
		'peekViewResult.selectionBackground': '#3d59a133',
		'peekViewResult.lineForeground': '#a9b1d6',
		'peekViewResult.fileForeground': '#7982a9',
		'peekViewResult.matchHighlightBackground': '#3d59a166',

		'diffEditor.insertedTextBackground': '#41a6b520',
		'diffEditor.removedTextBackground': '#db4b4b22',
		'diffEditor.insertedLineBackground': '#41a6b520',
		'diffEditor.removedLineBackground': '#db4b4b22',
		'diffEditorGutter.insertedLineBackground': '#41a6b525',
		'diffEditorGutter.removedLineBackground': '#db4b4b22',
		'diffEditorOverview.insertedForeground': '#41a6b525',
		'diffEditorOverview.removedForeground': '#db4b4b22',
		'diffEditor.diagonalFill': '#2c324a',

		'tab.activeBackground': bg.editor,
		'tab.inactiveBackground': bg.blocks,
		'tab.activeForeground': text.base,
		'tab.hoverForeground': text.highlight,
		'tab.activeBorder': accent,
		'tab.inactiveForeground': text.dimmed,
		'tab.border': border,
		'tab.unfocusedActiveForeground': '#a9b1d6',
		'tab.unfocusedInactiveForeground': '#7982a9',
		'tab.unfocusedHoverForeground': '#a9b1d6',
		'tab.activeModifiedBorder': '#282d42',
		'tab.inactiveModifiedBorder': '#282d42',
		'tab.unfocusedActiveBorder': '#3b4261',
		'tab.lastPinnedBorder': '#2c3147',

		'breadcrumb.background': bg.editor,
		'breadcrumbPicker.background': bg.blocks,
		'breadcrumb.foreground': text.base,
		'breadcrumb.focusForeground': text.highlight,
		'breadcrumb.activeSelectionForeground': text.highlight,

		'panel.background': bg.blocks,
		'panel.border': border,
		'panelTitle.activeForeground': text.base,
		'panelTitle.inactiveForeground': text.dimmed,
		'panelTitle.activeBorder': accent,
		'panelInput.border': border,

		'statusBar.foreground': text.base,
		'statusBar.background': bg.blocks,
		'statusBar.border': border,
		'statusBar.noFolderBackground': bg.blocks,
		'statusBar.debuggingBackground': bg.editor,
		'statusBar.debuggingForeground': text.base,
		'statusBarItem.activeBackground': '#1b1e2e',
		'statusBarItem.hoverBackground': bg.editor,
		'statusBarItem.prominentBackground': '#1b1e2e',
		'statusBarItem.prominentHoverBackground': '#282e44',

		'titleBar.activeForeground': text.dimmed,
		'titleBar.inactiveForeground': text.dimmed,
		'titleBar.activeBackground': bg.blocks,
		'titleBar.inactiveBackground': bg.blocks,
		'titleBar.border': border,

		'walkThrough.embeddedEditorBackground': '#1f2335',
		'textLink.foreground': '#668ac4',
		'textLink.activeForeground': '#7dcfff',
		'textPreformat.foreground': '#73daca',
		'textBlockQuote.background': '#1f2335',
		'textCodeBlock.background': '#1f2335',
		'textSeparator.foreground': '#545c7e',

		'debugExceptionWidget.border': '#963c47',
		'debugExceptionWidget.background': '#1b1e2e',
		'debugToolBar.background': '#1b1e2e',

		'debugConsole.infoForeground': '#7982a9',
		'debugConsole.errorForeground': '#bb616b',
		'debugConsole.sourceForeground': '#7982a9',
		'debugConsole.warningForeground': '#c49a5a',
		'debugConsoleInputIcon.foreground': '#73daca',

		'editor.stackFrameHighlightBackground': '#e2bd3a20',
		'editor.focusedStackFrameHighlightBackground': '#73daca20',
		'debugView.stateLabelForeground': '#7982a9',
		'debugView.stateLabelBackground': '#1b1e2e',
		'debugView.valueChangedHighlight': '#3d59a1cc',
		'debugTokenExpression.name': '#7dcfff',
		'debugTokenExpression.value': '#9aa5ce',
		'debugTokenExpression.string': '#9ece6a',
		'debugTokenExpression.boolean': '#ff9e64',
		'debugTokenExpression.number': '#ff9e64',
		'debugTokenExpression.error': '#bb616b',

		'debugIcon.breakpointForeground': '#db4b4b',
		'debugIcon.breakpointDisabledForeground': '#545c7e',
		'debugIcon.breakpointUnverifiedForeground': '#c24242',

		'terminal.background': bg.blocks,
		'terminal.foreground': '#7982a9',
		'terminal.selectionBackground': '#6f7bb640',
		// "terminalCursor.background": "",
		// "terminalCursor.foreground": "",

		'terminal.ansiBlack': '#414868',
		'terminal.ansiRed': '#f7768e',
		'terminal.ansiGreen': '#73daca',
		'terminal.ansiYellow': '#e0af68',
		'terminal.ansiBlue': '#7aa2f7',
		'terminal.ansiMagenta': '#bb9af7',
		'terminal.ansiCyan': '#7dcfff',
		'terminal.ansiWhite': '#7982a9',
		'terminal.ansiBrightBlack': '#414868',
		'terminal.ansiBrightRed': '#f7768e',
		'terminal.ansiBrightGreen': '#73daca',
		'terminal.ansiBrightYellow': '#e0af68',
		'terminal.ansiBrightBlue': '#7aa2f7',
		'terminal.ansiBrightMagenta': '#bb9af7',
		'terminal.ansiBrightCyan': '#7dcfff',
		'terminal.ansiBrightWhite': '#a9b1d6',

		'gitDecoration.modifiedResourceForeground': '#6183bb',
		'gitDecoration.ignoredResourceForeground': '#545c7e',
		'gitDecoration.deletedResourceForeground': '#914c54',
		'gitDecoration.renamedResourceForeground': '#449dab',
		'gitDecoration.addedResourceForeground': '#449dab',
		'gitDecoration.untrackedResourceForeground': '#449dab',
		'gitDecoration.conflictingResourceForeground': '#e0af68cc',
		'gitDecoration.stageDeletedResourceForeground': '#914c54',
		'gitDecoration.stageModifiedResourceForeground': '#6183bb',

		'notebook.editorBackground': '#24283b',
		'notebook.cellEditorBackground': '#1f2335',
		'notebook.cellBorderColor': '#1b1e2e',
		'notebook.focusedCellBorder': '#29355a',
		'notebook.cellStatusBarItemHoverBackground': '#2c324a',

		'charts.red': '#f7768e',
		'charts.blue': '#7aa2f7',
		'charts.yellow': '#e0af68',
		'charts.orange': '#ff9e64',
		'charts.green': '#73daca',
		'charts.purple': '#9d7cd8',
		'charts.foreground': '#9AA5CE',
		'charts.lines': '#1f2335',

		'merge.currentHeaderBackground': '#41a6b525',
		'merge.currentContentBackground': '#007a7544',
		'merge.incomingHeaderBackground': '#3d59a1aa',
		'merge.incomingContentBackground': '#3d59a144',
		'mergeEditor.change.background': '#41a6b525',
		'mergeEditor.change.word.background': '#41a6b540',
		'mergeEditor.conflict.unhandledUnfocused.border': '#e0af6888',
		'mergeEditor.conflict.unhandledFocused.border': '#e0af68d9',
		'mergeEditor.conflict.handledUnfocused.border': '#41a6b525',
		'mergeEditor.conflict.handledFocused.border': '#41a6b565',
		'mergeEditor.conflict.handled.minimapOverViewRuler': '#449dab',
		'mergeEditor.conflict.unhandled.minimapOverViewRuler': '#e0af68',

		'gitlens.trailingLineForegroundColor': '#7582ba',
		'gitlens.gutterUncommittedForegroundColor': '#7aa2f7',
		'gitlens.gutterForegroundColor': '#7982a9',
		'gitlens.gutterBackgroundColor': '#1f2335',

		'notificationCenterHeader.background': '#1b1e2e',
		'notifications.background': '#1b1e2e',
		'notificationLink.foreground': '#6183bb',
		'notificationsErrorIcon.foreground': '#bb616b',
		'notificationsWarningIcon.foreground': '#bba461',
		'notificationsInfoIcon.foreground': '#0da0ba',

		'menubar.selectionForeground': '#c0caf5',
		'menubar.selectionBackground': '#2f3549',
		'menubar.selectionBorder': '#1b1e2e',
		'menu.foreground': '#7982a9',
		'menu.background': bg.blocks,
		'menu.selectionForeground': '#c0caf5',
		'menu.selectionBackground': '#2f3549',
		'menu.separatorBackground': '#1b1e2e',
		'menu.border': '#1b1e2e',
	},
	tokenColors: [
		{
			name: 'Comments',
			scope: ['comment'],
			settings: {
				foreground: colors.darkBlue[300],
			},
		},
		{
			name: 'Variable',
			scope: ['variable'],
			settings: { foreground: colors.slate[100] },
		},
		{
			name: 'Functions',
			scope: [
				'entity.name.function',
				'support.function',
				'meta.function-call.generic',
				'support.function.magic',
				'punctuation.definition.template-expression',
			],
			settings: {
				foreground: colors.cyan[300],
			},
		},
		{
			name: 'Function parameter',
			scope: ['variable.parameter'],
			settings: {
				foreground: colors.blue[100],
				fontStyle: 'italic',
			},
		},
		{
			name: 'Keywords | Keyword operator',
			scope: ['keyword', 'meta.method.declaration storage.type'],
			settings: {
				foreground: colors.indigo[300],
			},
		},
		{
			name: 'Storage (let, const, async, function, class, extends, ...) | Variable language | Keyword operator expression | Keyword operator new',
			scope: [
				'storage',
				'variable.language',
				'keyword.operator.expression',
				'keyword.operator.new',
				'keyword.function',
			],
			settings: {
				foreground: colors.indigo[300],
			},
		},
		{
			name: 'Classes',
			scope: [
				'support.class',
				'entity.name.type',
				'entity.other.inherited-class',
				'entity.name.scope-resolution',
				'support.type',
			],
			settings: {
				foreground: colors.orange[300],
			},
		},
		{
			name: 'Primitives',
			scope: [
				'support.type.primitive',
				'entity.other.attribute-name.pseudo-class',
				'entity.other.attribute-name.pseudo-element',
			],
			settings: {
				foreground: colors.roseRed[300],
			},
		},
		{
			name: 'Strings',
			scope: ['string'],
			settings: {
				foreground: colors.purplePink[400],
			},
		},
		{
			name: 'String regex',
			scope: ['string.regexp'],
			settings: {
				foreground: colors.indigo[300],
				fontStyle: 'italic',
			},
		},
		{
			name: 'Tags',
			scope: [
				'entity.name.tag',
				'variable.language.this',
				'variable.language.super',
				'variable.parameter.function.language.special.self',
				'variable.language.special.self',
				'entity.name.tag.reference',
			],
			settings: {
				foreground: colors.redOrange[200],
			},
		},
		{
			name: 'Json key, Yaml key',
			scope: [
				'support.type.property-name.json',
				'source.yaml entity.name.tag',
			],
			settings: {
				foreground: colors.blue[200],
			},
		},
		{
			name: 'Punctuation tag',
			scope: [
				'punctuation.definition.tag.begin',
				'punctuation.definition.tag.end',
				'punctuation.definition.typeparameters.begin',
				'punctuation.definition.typeparameters.end',
			],
			settings: {
				foreground: colors.redOrange[300],
			},
		},
		{
			name: 'Attribute name',
			scope: ['entity.other.attribute-name'],
			settings: {
				foreground: colors.blue[200],
				fontStyle: 'italic',
			},
		},
		{
			name: 'Ids',
			scope: ['entity.other.attribute-name.id'],
			settings: {
				foreground: colors.turquoise[500],
			},
		},
		{
			name: 'Constant',
			scope: [
				'support.constant',
				'constant.language',
				'support.type.builtin',
			],
			settings: {
				foreground: colors.roseRed[300],
			},
		},
		{
			name: 'Numeric constant',
			scope: ['constant.numeric'],
			settings: {
				foreground: colors.roseRed[300],
			},
		},
		{
			name: 'Keyword operator',
			scope: [
				'keyword.operator',
				'keyword.operator.assignment',
				'punctuation.accessor',
				'punctuation.separator.key-value',
				'punctuation.definition.block.sequence.item',
				'punctuation.separator.dictionary.key-value',
				'punctuation.definition.variable',
				'punctuation.separator.colon',
				'punctuation.separator.period',
				'punctuation.section',
				'keyword.other.unit',
			],
			settings: {
				foreground: colors.cyan[100],
			},
		},
		{
			name: 'CSS property name',
			scope: ['source.css support.type.property-name'],
			settings: {
				foreground: colors.violet[300],
			},
		},
		{
			name: 'Variable other property',
			scope: [
				'support.variable',
				'variable.other.predefined',
				'variable.other.property',
				'meta.object.member',
			],
			settings: {
				foreground: colors.aquamarine[400],
			},
		},
		{
			name: 'Variable other readwrite alias',
			scope: ['variable.other.readwrite.alias', 'entity.name.namespace'],
			settings: {
				foreground: colors.purple[300],
			},
		},
		{
			name: 'Variable other constant object',
			scope: ['variable.other.constant.object'],
			settings: {
				foreground: colors.slate[300],
			},
		},
	],
};

export default midnightTheme;
