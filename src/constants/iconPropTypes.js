import PropTypes from 'prop-types'

const PROP_TYPES = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  name: PropTypes.oneOf([
    'AccidentOutlined',
    'PoliceBadgeOutlined',
    'RoadWorksOutlined',
    'TrafficCone1Outlined',
    'TrafficCone2Outlined',
    'TrafficJamOutlined',
    'ActivitiesFilled',
    'AlertCircleFilled',
    'AlertDangerWarningFilled',
    'AlertInfoFilled',
    'AppleFilled',
    'AppointmentFilled',
    'ArrowLongDownFilled',
    'ArrowLongLeftFilled',
    'ArrowLongRightFilled',
    'ArrowLongUpFilled',
    'ArrowShortDownFilled',
    'ArrowShortLeftFilled',
    'ArrowShortRightFilled',
    'ArrowShortUpFilled',
    'AttachmentFilled',
    'BioflowFilled',
    'BioGroupFilled',
    'BroomFilled',
    'BugFilled',
    'CalendarFilled',
    'CameraFilled',
    'CategoryFilled',
    'ChartBarFilled',
    'ChartPieFilled',
    'CheckmarkFilled',
    'CheckMarkInShapeFilled',
    'ClinicFilled',
    'ClockFilled',
    'CloseFilled',
    'CompressFilled',
    'CopyFilled',
    'CloudSyncFilled',
    'CloudUploadFilled',
    'DesktopFilled',
    'DisorderFilled',
    'DocFilled',
    'DoubleCheckmarkFilled',
    'DurationFilled',
    'EditFilled',
    'EvaluationStateFilled',
    'ExpandFilled',
    'FacebookFilled',
    'FileFilled',
    'FileAddFilled',
    'FileDownloadFilled',
    'FileFailFilled',
    'FileUploadFilled',
    'FilterFilled',
    'FoihelseFilled',
    'FolderFilled',
    'FormFilled',
    'GoogleFilled',
    'GoogleColoredFilled',
    'HeartFilled',
    'HideFilled',
    'HistoryFilled',
    'HomeFilled',
    'ImageFilled',
    'InstagramFilled',
    'InvoiceFilled',
    'LinkFilled',
    'LinkedInFilled',
    'LinkExternalFilled',
    'LocationFilled',
    'LoadingFilled',
    'LockFilled',
    'LoginFilled',
    'LogoutFilled',
    'MailFilled',
    'MenuFilled',
    'MenuHorizontalFilled',
    'MenuVerticalFilled',
    'MessageFilled',
    'MessageSendFilled',
    'MicrophoneOffFilled',
    'MicrophoneOnFilled',
    'MinusFilled',
    'NotificationFilled',
    'PackageFilled',
    'PasswordFilled',
    'PasswordKeyFilled',
    'PatientFilled',
    'PatientAddFilled',
    'PatientsFilled',
    'PauseFilled',
    'PhoneFilled',
    'PhoneCallingFilled',
    'PhoneCallMissedFilled',
    'PhoneCallMuttedFilled',
    'PlayFilled',
    'PlayInShapeFilled',
    'PlusFilled',
    'PlusInShapeFilled',
    'PrinterFilled',
    'ScaleFilled',
    'SearchFilled',
    'SendFilled',
    'SettingsFilled',
    'ShieldFilled',
    'ShieldDDosFilled',
    'ShowFilled',
    'StarFilled',
    'StudyFilled',
    'TherapistFilled',
    'TherapistAddFilled',
    'Ticket1Filled',
    'Ticket2Filled',
    'TranslationFilled',
    'TrashFilled',
    'UnlockFilled',
    'VideoAddFilled',
    'VideoOffFilled',
    'VideoOnFilled',
    'VippsFilled',
    'VolumeDownFilled',
    'VolumeOffFilled',
    'VolumeUpFilled',
    'WalletFilled',
    'WindowsFilled',
    'Plus1Outlined',
    'LanguageOutlined',
    'AppleOutlined',
    'FacebookOutlined',
    'Google1Outlined',
    'InstagramOutlined',
    'LinkedInOutlined',
    'VippsOutlined',
    'WindowsOutlined',
    'ActivityHeartOutlined',
    'ActivityOutlined',
    'AirplayOutlined',
    'AirpodsOutlined',
    'AlarmClockCheckOutlined',
    'AlarmClockMinusOutlined',
    'AlarmClockOffOutlined',
    'AlarmClockPlusOutlined',
    'AlarmClockOutlined',
    'AlertCircleOutlined',
    'AlertHexagonOutlined',
    'AlertOctagonOutlined',
    'AlertSquareOutlined',
    'AlertTriangleOutlined',
    'AlignBottom1Outlined',
    'AlignBottom2Outlined',
    'AlignCenterOutlined',
    'AlignHorizontalCentre1Outlined',
    'AlignHorizontalCentre2Outlined',
    'AlignJustifyOutlined',
    'AlignLeft1Outlined',
    'AlignLeft2Outlined',
    'AlignLeftOutlined',
    'AlignRight1Outlined',
    'AlignRight2Outlined',
    'AlignRightOutlined',
    'AlignTopArrow1Outlined',
    'AlignTopArrow2Outlined',
    'AlignVerticalCenter1Outlined',
    'AlignVerticalCenter2Outlined',
    'AnchorOutlined',
    'AnnotationAlertOutlined',
    'AnnotationCheckOutlined',
    'AnnotationDotsOutlined',
    'AnnotationHeartOutlined',
    'AnnotationInfoOutlined',
    'AnnotationPlusOutlined',
    'AnnotationQuestionOutlined',
    'AnnotationXOutlined',
    'AnnotationOutlined',
    'Announcement1Outlined',
    'Announcement2Outlined',
    'Announcement3Outlined',
    'ArchiveOutlined',
    'ArrowBlockDownOutlined',
    'ArrowBlockLeftOutlined',
    'ArrowBlockRightOutlined',
    'ArrowBlockUpOutlined',
    'ArrowCircleBrokenDownLeftOutlined',
    'ArrowCircleBrokenDownRightOutlined',
    'ArrowCircleBrokenDownOutlined',
    'ArrowCircleBrokenLeftOutlined',
    'ArrowCircleBrokenRightOutlined',
    'ArrowCircleBrokenUpLeftOutlined',
    'ArrowCircleBrokenUpRightOutlined',
    'ArrowCircleBrokenUpOutlined',
    'ArrowCircleDownLeftOutlined',
    'ArrowCircleDownRightOutlined',
    'ArrowCircleDownOutlined',
    'ArrowCircleLeftOutlined',
    'ArrowCircleRightOutlined',
    'ArrowCircleUpLeftOutlined',
    'ArrowCircleUpRightOutlined',
    'ArrowCircleUpOutlined',
    'ArrowDownLeftOutlined',
    'ArrowDownRightOutlined',
    'ArrowDownOutlined',
    'ArrowLeftOutlined',
    'ArrowNarrowDownLeftOutlined',
    'ArrowNarrowDownRightOutlined',
    'ArrowNarrowDownOutlined',
    'ArrowNarrowLeftOutlined',
    'ArrowNarrowRightOutlined',
    'ArrowNarrowUpLeftOutlined',
    'ArrowNarrowUpRightOutlined',
    'ArrowNarrowUpOutlined',
    'ArrowRightOutlined',
    'ArrowSquareDownLeftOutlined',
    'ArrowSquareDownRightOutlined',
    'ArrowSquareDownOutlined',
    'ArrowSquareLeftOutlined',
    'ArrowSquareRightOutlined',
    'ArrowSquareUpLeftOutlined',
    'ArrowSquareUpRightOutlined',
    'ArrowSquareUpOutlined',
    'ArrowUpLeftOutlined',
    'ArrowUpRightOutlined',
    'ArrowUpOutlined',
    'ArrowsDownOutlined',
    'ArrowsLeftOutlined',
    'ArrowsRightOutlined',
    'ArrowsTriangleOutlined',
    'ArrowsUpOutlined',
    'Asterisk1Outlined',
    'Asterisk2Outlined',
    'AtSignOutlined',
    'Atom1Outlined',
    'Atom2Outlined',
    'Attachment1Outlined',
    'Attachment2Outlined',
    'Award1Outlined',
    'Award2Outlined',
    'Award3Outlined',
    'Award4Outlined',
    'Award5Outlined',
    'BackpackOutlined',
    'BankNote1Outlined',
    'BankNote2Outlined',
    'BankNote3Outlined',
    'BankOutlined',
    'BarChart1Outlined',
    'BarChart2Outlined',
    'BarChart3Outlined',
    'BarChart4Outlined',
    'BarChart5Outlined',
    'BarChart6Outlined',
    'BarChart7Outlined',
    'BarChart8Outlined',
    'BarChart9Outlined',
    'BarChart10Outlined',
    'BarChart11Outlined',
    'BarChart12Outlined',
    'BarChartCircle1Outlined',
    'BarChartCircle2Outlined',
    'BarChartCircle3Outlined',
    'BarChartSquare1Outlined',
    'BarChartSquare2Outlined',
    'BarChartSquare3Outlined',
    'BarChartSquareDownOutlined',
    'BarChartSquareMinusOutlined',
    'BarChartSquarePlusOutlined',
    'BarChartSquareUpOutlined',
    'BarLineChartOutlined',
    'BatteryCharging1Outlined',
    'BatteryCharging2Outlined',
    'BatteryEmptyOutlined',
    'BatteryFullOutlined',
    'BatteryLowOutlined',
    'BatteryMidOutlined',
    'Beaker1Outlined',
    'Beaker2Outlined',
    'Bell1Outlined',
    'Bell2Outlined',
    'Bell3Outlined',
    'Bell4Outlined',
    'BellMinusOutlined',
    'BellOff1Outlined',
    'BellOff2Outlined',
    'BellOff3Outlined',
    'BellPlusOutlined',
    'BellRinging1Outlined',
    'BellRinging2Outlined',
    'BellRinging3Outlined',
    'BellRinging4Outlined',
    'BezierCurve1Outlined',
    'BezierCurve2Outlined',
    'BezierCurve3Outlined',
    'BluetoothConnectOutlined',
    'BluetoothOnOutlined',
    'BluetoothSignalOutlined',
    'BluetoothOutlined',
    'Bold1Outlined',
    'Bold2Outlined',
    'BoldSquareOutlined',
    'BookClosedOutlined',
    'BookOpen1Outlined',
    'BookOpen2Outlined',
    'BookmarkAddOutlined',
    'BookmarkCheckOutlined',
    'BookmarkMinusOutlined',
    'BookmarkXOutlined',
    'BookmarkOutlined',
    'BoxOutlined',
    'BracketsCheckOutlined',
    'BracketsEllipsesOutlined',
    'BracketsMinusOutlined',
    'BracketsPlusOutlined',
    'BracketsSlashOutlined',
    'BracketsXOutlined',
    'BracketsOutlined',
    'Briefcase1Outlined',
    'Briefcase2Outlined',
    'BrowserOutlined',
    'Brush1Outlined',
    'Brush2Outlined',
    'Brush3Outlined',
    'Building1Outlined',
    'Building2Outlined',
    'Building3Outlined',
    'Building4Outlined',
    'Building5Outlined',
    'Building6Outlined',
    'Building7Outlined',
    'Building8Outlined',
    'BusOutlined',
    'CalculatorOutlined',
    'CalendarCheck1Outlined',
    'CalendarCheck2Outlined',
    'CalendarDateOutlined',
    'CalendarHeart1Outlined',
    'CalendarHeart2Outlined',
    'CalendarMinus1Outlined',
    'CalendarMinus2Outlined',
    'CalendarPlus1Outlined',
    'CalendarPlus2Outlined',
    'CalendarOutlined',
    'Camera1Outlined',
    'Camera2Outlined',
    'Camera3Outlined',
    'CameraLensOutlined',
    'CameraOffOutlined',
    'CameraPlusOutlined',
    'Car2Outlined',
    'CarOutlined',
    'Certificate1Outlined',
    'Certificate2Outlined',
    'ChartBreakoutCircleOutlined',
    'ChartBreakoutSquareOutlined',
    'CheckCircleBrokenOutlined',
    'CheckCircleOutlined',
    'CheckDone1Outlined',
    'CheckDone2Outlined',
    'CheckHeartOutlined',
    'CheckSquareBrokenOutlined',
    'CheckSquareOutlined',
    'CheckVerified1Outlined',
    'CheckVerified2Outlined',
    'CheckVerified3Outlined',
    'CheckOutlined',
    'ChevronDownDoubleOutlined',
    'ChevronDownOutlined',
    'ChevronLeftDoubleOutlined',
    'ChevronLeftOutlined',
    'ChevronRightDoubleOutlined',
    'ChevronRightOutlined',
    'ChevronSelectorHorizontalOutlined',
    'ChevronSelectorVerticalOutlined',
    'ChevronUpDoubleOutlined',
    'ChevronUpOutlined',
    'ChromeCastOutlined',
    'CircleCutOutlined',
    'CircleOutlined',
    'ClapperboardOutlined',
    'ClipboardAttachmentOutlined',
    'ClipboardCheckOutlined',
    'ClipboardDownloadOutlined',
    'ClipboardMinusOutlined',
    'ClipboardPlusOutlined',
    'ClipboardXOutlined',
    'ClipboardOutlined',
    'ClockCheckOutlined',
    'ClockFastForwardOutlined',
    'ClockPlusOutlined',
    'ClockRefreshOutlined',
    'ClockRewindOutlined',
    'ClockSnoozeOutlined',
    'ClockStopwatchOutlined',
    'ClockOutlined',
    'Cloud1Outlined',
    'Cloud2Outlined',
    'Cloud3Outlined',
    'CloudBlank1Outlined',
    'CloudBlank2Outlined',
    'CloudLightningOutlined',
    'CloudMoonOutlined',
    'CloudOffOutlined',
    'CloudRaining1Outlined',
    'CloudRaining2Outlined',
    'CloudRaining3Outlined',
    'CloudRaining4Outlined',
    'CloudRaining5Outlined',
    'CloudRaining6Outlined',
    'CloudSnowing1Outlined',
    'CloudSnowing2Outlined',
    'CloudSun1Outlined',
    'CloudSun2Outlined',
    'CloudSun3Outlined',
    'Code1Outlined',
    'Code2Outlined',
    'CodeBrowserOutlined',
    'CodeCircle1Outlined',
    'CodeCircle2Outlined',
    'CodeCircle3Outlined',
    'CodeSnippet1Outlined',
    'CodeSnippet2Outlined',
    'CodeSquare1Outlined',
    'CodeSquare2Outlined',
    'CodepenOutlined',
    'Coins1Outlined',
    'Coins2Outlined',
    'Coins3Outlined',
    'Coins4Outlined',
    'CoinsHandOutlined',
    'CoinsStacked1Outlined',
    'CoinsStacked2Outlined',
    'CoinsStacked3Outlined',
    'CoinsStacked4Outlined',
    'CoinsSwap1Outlined',
    'CoinsSwap2Outlined',
    'Colors1Outlined',
    'ColorsOutlined',
    'Columns2Outlined',
    'Columns3Outlined',
    'CommandOutlined',
    'Compass1Outlined',
    'Compass2Outlined',
    'Compass3Outlined',
    'CompassOutlined',
    'ContainerOutlined',
    'Contrast1Outlined',
    'Contrast2Outlined',
    'Contrast3Outlined',
    'Copy1Outlined',
    'Copy2Outlined',
    'Copy3Outlined',
    'Copy4Outlined',
    'Copy5Outlined',
    'Copy6Outlined',
    'Copy7Outlined',
    'CornerDownLeftOutlined',
    'CornerDownRightOutlined',
    'CornerLeftDownOutlined',
    'CornerLeftUpOutlined',
    'CornerRightDownOutlined',
    'CornerRightUpOutlined',
    'CornerUpLeftOutlined',
    'CornerUpRightOutlined',
    'CpuChip1Outlined',
    'CpuChip2Outlined',
    'CreditCard1Outlined',
    'CreditCard2Outlined',
    'CreditCardCheckOutlined',
    'CreditCardDownOutlined',
    'CreditCardDownloadOutlined',
    'CreditCardEditOutlined',
    'CreditCardLockOutlined',
    'CreditCardMinusOutlined',
    'CreditCardPlusOutlined',
    'CreditCardRefreshOutlined',
    'CreditCardSearchOutlined',
    'CreditCardShieldOutlined',
    'CreditCardUpOutlined',
    'CreditCardUploadOutlined',
    'CreditCardXOutlined',
    'Crop1Outlined',
    'Crop2Outlined',
    'Cryptocurrency1Outlined',
    'Cryptocurrency2Outlined',
    'Cryptocurrency3Outlined',
    'Cryptocurrency4Outlined',
    'Cube1Outlined',
    'Cube2Outlined',
    'Cube3Outlined',
    'Cube4Outlined',
    'CubeOutlineOutlined',
    'CurrencyBitcoinCircleOutlined',
    'CurrencyBitcoinOutlined',
    'CurrencyDollarCircleOutlined',
    'CurrencyDollarOutlined',
    'CurrencyEthereumCircleOutlined',
    'CurrencyEthereumOutlined',
    'CurrencyEuroCircleOutlined',
    'CurrencyEuroOutlined',
    'CurrencyPoundCircleOutlined',
    'CurrencyPoundOutlined',
    'CurrencyRubleCircleOutlined',
    'CurrencyRubleOutlined',
    'CurrencyRupeeCircleOutlined',
    'CurrencyRupeeOutlined',
    'CurrencyYenCircleOutlined',
    'CurrencyYenOutlined',
    'Cursor1Outlined',
    'Cursor2Outlined',
    'Cursor3Outlined',
    'Cursor4Outlined',
    'CursorBoxOutlined',
    'CursorClick1Outlined',
    'CursorClick2Outlined',
    'Dashboard2Outlined',
    'DashboardOutlined',
    'DataOutlined',
    'Database1Outlined',
    'Database2Outlined',
    'Database3Outlined',
    'Dataflow1Outlined',
    'Dataflow2Outlined',
    'Dataflow3Outlined',
    'Dataflow4Outlined',
    'DeleteOutlined',
    'Diamond1Outlined',
    'Diamond2Outlined',
    'Dice1Outlined',
    'Dice2Outlined',
    'Dice3Outlined',
    'Dice4Outlined',
    'Dice5Outlined',
    'Dice6Outlined',
    'Disc1Outlined',
    'Disc2Outlined',
    'DistributeSpacingHorizontalOutlined',
    'DistributeSpacingVerticalOutlined',
    'Divide1Outlined',
    'Divide2Outlined',
    'Divide3Outlined',
    'DividerOutlined',
    'Dotpoints1Outlined',
    'Dotpoints2Outlined',
    'DotsGridOutlined',
    'DotsHorizontalOutlined',
    'DotsVerticalOutlined',
    'Download1Outlined',
    'Download2Outlined',
    'Download3Outlined',
    'Download4Outlined',
    'DownloadCloud1Outlined',
    'DownloadCloud2Outlined',
    'DropOutlined',
    'Droplets1Outlined',
    'Droplets2Outlined',
    'Droplets3Outlined',
    'DropperOutlined',
    'Edit1Outlined',
    'Edit2Outlined',
    'Edit3Outlined',
    'Edit4Outlined',
    'Edit5Outlined',
    'EqualNotOutlined',
    'EqualOutlined',
    'EraserOutlined',
    'Expand1Outlined',
    'Expand2Outlined',
    'Expand3Outlined',
    'Expand4Outlined',
    'Expand5Outlined',
    'Expand6Outlined',
    'EyeOffOutlined',
    'EyeOutlined',
    'FaceContentOutlined',
    'FaceFrownOutlined',
    'FaceHappyOutlined',
    'FaceIdSquareOutlined',
    'FaceIdOutlined',
    'FaceNeutralOutlined',
    'FaceSadOutlined',
    'FaceSmileOutlined',
    'FaceWinkOutlined',
    'FastBackwardOutlined',
    'FastForwardOutlined',
    'FeatherOutlined',
    'FigmaOutlined',
    'File1Outlined',
    'File2Outlined',
    'File3Outlined',
    'File4Outlined',
    'File5Outlined',
    'File6Outlined',
    'File7Outlined',
    'FileAttachment1Outlined',
    'FileAttachment2Outlined',
    'FileAttachment3Outlined',
    'FileAttachment4Outlined',
    'FileAttachment5Outlined',
    'FileCheck1Outlined',
    'FileCheck2Outlined',
    'FileCheck3Outlined',
    'FileCode1Outlined',
    'FileCode2Outlined',
    'FileDownload1Outlined',
    'FileDownload2Outlined',
    'FileDownload3Outlined',
    'FileHeart1Outlined',
    'FileHeart2Outlined',
    'FileHeart3Outlined',
    'FileLock1Outlined',
    'FileLock2Outlined',
    'FileLock3Outlined',
    'FileMinus1Outlined',
    'FileMinus2Outlined',
    'FileMinus3Outlined',
    'FilePlus1Outlined',
    'FilePlus2Outlined',
    'FilePlus3Outlined',
    'FileQuestion1Outlined',
    'FileQuestion2Outlined',
    'FileQuestion3Outlined',
    'FileSearch1Outlined',
    'FileSearch2Outlined',
    'FileSearch3Outlined',
    'FileShield1Outlined',
    'FileShield2Outlined',
    'FileShield3Outlined',
    'FileUpload3Outlined',
    'FileX1Outlined',
    'FileX2Outlined',
    'FileX3Outlined',
    'Film1Outlined',
    'Film2Outlined',
    'Film3Outlined',
    'FilterFunnel1Outlined',
    'FilterFunnel2Outlined',
    'FilterLinesOutlined',
    'Fingerprint1Outlined',
    'Fingerprint2Outlined',
    'Fingerprint3Outlined',
    'Fingerprint4Outlined',
    'Flag1Outlined',
    'Flag2Outlined',
    'Flag3Outlined',
    'Flag4Outlined',
    'Flag5Outlined',
    'Flag6Outlined',
    'FlashOffOutlined',
    'FlashOutlined',
    'FlexAlignBottomOutlined',
    'FlexAlignLeftOutlined',
    'FlexAlignRightOutlined',
    'FlexAlignTopOutlined',
    'FlipBackwardOutlined',
    'FlipForwardOutlined',
    'FolderCheckOutlined',
    'FolderClosedOutlined',
    'FolderCodeOutlined',
    'FolderDownloadOutlined',
    'FolderLockOutlined',
    'FolderMinusOutlined',
    'FolderPlusOutlined',
    'FolderQuestionOutlined',
    'FolderSearchOutlined',
    'FolderShieldOutlined',
    'FolderXOutlined',
    'FolderOutlined',
    'FramerOutlined',
    'FuelStationOutlined',
    'GamingPad1Outlined',
    'GamingPad2Outlined',
    'Gift1Outlined',
    'Gift2Outlined',
    'GitBranch1Outlined',
    'GitBranch2Outlined',
    'GitCommitOutlined',
    'GitMergeOutlined',
    'GitPullRequestOutlined',
    'Glasses1Outlined',
    'Glasses2Outlined',
    'Globe11Outlined',
    'Globe1Outlined',
    'Globe21Outlined',
    'Globe2Outlined',
    'Globe3Outlined',
    'Globe4Outlined',
    'Globe5Outlined',
    'Globe6Outlined',
    'GoogleChromeOutlined',
    'GraduationHat1Outlined',
    'GraduationHat2Outlined',
    'Grid1Outlined',
    'Grid2Outlined',
    'Grid3Outlined',
    'GridDotsBlankOutlined',
    'GridDotsBottomOutlined',
    'GridDotsHorizontalCenterOutlined',
    'GridDotsLeftOutlined',
    'GridDotsOuterOutlined',
    'GridDotsRightOutlined',
    'GridDotsTopOutlined',
    'GridDotsVerticalCenterOutlined',
    'GridOutlined',
    'HandOutlined',
    'HardDriveOutlined',
    'Hash1Outlined',
    'Hash2Outlined',
    'Heading1Outlined',
    'Heading2Outlined',
    'HeadingSquareOutlined',
    'Headphones1Outlined',
    'Headphones2Outlined',
    'HeartCircleOutlined',
    'HeartHandOutlined',
    'HeartOctagonOutlined',
    'HeartRoundedOutlined',
    'HeartSquareOutlined',
    'HeartOutlined',
    'HeartsOutlined',
    'HelpCircleOutlined',
    'HelpHexagonOutlined',
    'HelpOctagon1Outlined',
    'HelpOctagonOutlined',
    'HelpSquareOutlined',
    'Hexagon1Outlined',
    'Hexagon2Outlined',
    'Home1Outlined',
    'Home2Outlined',
    'Home3Outlined',
    'Home4Outlined',
    'Home5Outlined',
    'HomeLineOutlined',
    'HomeSmileOutlined',
    'HorizontalBarChart1Outlined',
    'HorizontalBarChart2Outlined',
    'HorizontalBarChart3Outlined',
    'Hourglass1Outlined',
    'Hourglass2Outlined',
    'Hourglass3Outlined',
    'Hurricane1Outlined',
    'Hurricane2Outlined',
    'Hurricane3Outlined',
    'Image1Outlined',
    'Image2Outlined',
    'Image3Outlined',
    'Image4Outlined',
    'Image5Outlined',
    'ImageCheckOutlined',
    'ImageDownOutlined',
    'ImageIndentLeftOutlined',
    'ImageIndentRightOutlined',
    'ImageLeftOutlined',
    'ImagePlusOutlined',
    'ImageRightOutlined',
    'ImageUpOutlined',
    'ImageUserCheckOutlined',
    'ImageUserDownOutlined',
    'ImageUserLeftOutlined',
    'ImageUserPlusOutlined',
    'ImageUserRightOutlined',
    'ImageUserUpOutlined',
    'ImageUserXOutlined',
    'ImageUserOutlined',
    'ImageXOutlined',
    'Inbox1Outlined',
    'Inbox2Outlined',
    'InfinityOutlined',
    'InfoCircleOutlined',
    'InfoHexagonOutlined',
    'InfoOctagonOutlined',
    'InfoSquareOutlined',
    'IntersectCircleOutlined',
    'IntersectSquareOutlined',
    'Italic1Outlined',
    'Italic2Outlined',
    'ItalicSquareOutlined',
    'Key1Outlined',
    'Key2Outlined',
    'Keyboard1Outlined',
    'Keyboard2Outlined',
    'Laptop1Outlined',
    'Laptop2Outlined',
    'LayerSingleOutlined',
    'LayersThree1Outlined',
    'LayersThree2Outlined',
    'LayersTwo1Outlined',
    'LayersTwo2Outlined',
    'LayoutAlt1Outlined',
    'LayoutAlt2Outlined',
    'LayoutAlt3Outlined',
    'LayoutAlt4Outlined',
    'LayoutBottomOutlined',
    'LayoutGrid1Outlined',
    'LayoutGrid2Outlined',
    'LayoutLeftOutlined',
    'LayoutRightOutlined',
    'LayoutTopOutlined',
    'LeftIndent1Outlined',
    'LeftIndent2Outlined',
    'LetterSpacing1Outlined',
    'LetterSpacing2Outlined',
    'LifeBuoy1Outlined',
    'LifeBuoy2Outlined',
    'Lightbulb1Outlined',
    'Lightbulb2Outlined',
    'Lightbulb3Outlined',
    'Lightbulb4Outlined',
    'Lightbulb5Outlined',
    'Lightning1Outlined',
    'Lightning2Outlined',
    'LineChartDown1Outlined',
    'LineChartDown2Outlined',
    'LineChartDown3Outlined',
    'LineChartDown4Outlined',
    'LineChartDown5Outlined',
    'LineChartUp1Outlined',
    'LineChartUp2Outlined',
    'LineChartUp3Outlined',
    'LineChartUp4Outlined',
    'LineChartUp5Outlined',
    'LineHeightOutlined',
    'Link1Outlined',
    'Link2Outlined',
    'Link3Outlined',
    'Link4Outlined',
    'Link5Outlined',
    'LinkBroken1Outlined',
    'LinkBroken2Outlined',
    'LinkExternal1Outlined',
    'LinkExternal2Outlined',
    'ListOutlined',
    'Loading1Outlined',
    'Loading2Outlined',
    'Loading3Outlined',
    'Lock1Outlined',
    'Lock2Outlined',
    'Lock3Outlined',
    'Lock4Outlined',
    'LockKeyholeCircleOutlined',
    'LockKeyholeSquareOutlined',
    'LockUnlocked1Outlined',
    'LockUnlocked2Outlined',
    'LockUnlocked3Outlined',
    'LockUnlocked4Outlined',
    'LogIn1Outlined',
    'LogIn2Outlined',
    'LogIn3Outlined',
    'LogIn4Outlined',
    'LogOut1Outlined',
    'LogOut2Outlined',
    'LogOut3Outlined',
    'LogOut4Outlined',
    'Luggage1Outlined',
    'Luggage2Outlined',
    'Luggage3Outlined',
    'MagicWand1Outlined',
    'MagicWand2Outlined',
    'Mail1Outlined',
    'Mail2Outlined',
    'Mail3Outlined',
    'Mail4Outlined',
    'Mail5Outlined',
    'Map1Outlined',
    'Map2Outlined',
    'MarkOutlined',
    'MarkerPin1Outlined',
    'MarkerPin2Outlined',
    'MarkerPin3Outlined',
    'MarkerPin4Outlined',
    'MarkerPin5Outlined',
    'MarkerPin6Outlined',
    'Maximize1Outlined',
    'Maximize2Outlined',
    'MedicalCircleOutlined',
    'MedicalCrossOutlined',
    'MedicalSquareOutlined',
    'Menu1Outlined',
    'Menu2Outlined',
    'Menu3Outlined',
    'Menu4Outlined',
    'Menu5Outlined',
    'MessageAlertCircleOutlined',
    'MessageAlertSquareOutlined',
    'MessageChatCircleOutlined',
    'MessageChatSquareOutlined',
    'MessageCheckCircleOutlined',
    'MessageCheckSquareOutlined',
    'MessageCircle1Outlined',
    'MessageCircle2Outlined',
    'MessageDotsCircleOutlined',
    'MessageDotsSquareOutlined',
    'MessageHeartCircleOutlined',
    'MessageHeartSquareOutlined',
    'MessageNotificationCircleOutlined',
    'MessageNotificationSquare1Outlined',
    'MessageNotificationSquareOutlined',
    'MessagePlusCircleOutlined',
    'MessagePlusSquareOutlined',
    'MessageQuestionCircleOutlined',
    'MessageQuestionSquareOutlined',
    'MessageSmileCircleOutlined',
    'MessageSmileSquareOutlined',
    'MessageSquare1Outlined',
    'MessageSquare2Outlined',
    'MessageTextCircle1Outlined',
    'MessageTextCircle2Outlined',
    'MessageTextSquare1Outlined',
    'MessageTextSquare2Outlined',
    'MessageXCircleOutlined',
    'MessageXSquareOutlined',
    'Microphone1Outlined',
    'Microphone2Outlined',
    'MicrophoneOff1Outlined',
    'MicrophoneOff2Outlined',
    'MicroscopeOutlined',
    'Minimize1Outlined',
    'Minimize2Outlined',
    'MinusCircleOutlined',
    'MinusSquareOutlined',
    'MinusOutlined',
    'Modem1Outlined',
    'Modem2Outlined',
    'Monitor1Outlined',
    'Monitor2Outlined',
    'Monitor3Outlined',
    'Monitor4Outlined',
    'Monitor5Outlined',
    'Moon1Outlined',
    'Moon2Outlined',
    'MoonEclipseOutlined',
    'MoonStarOutlined',
    'MouseOutlined',
    'MoveOutlined',
    'MusicNote1Outlined',
    'MusicNote2Outlined',
    'MusicOutlined',
    'NavigationPointer1Outlined',
    'NavigationPointer2Outlined',
    'NavigationPointerOff1Outlined',
    'NavigationPointerOff2Outlined',
    'NotificationBoxOutlined',
    'NotificationTextOutlined',
    'OctagonOutlined',
    'PackageCheckOutlined',
    'PackageMinusOutlined',
    'PackagePlusOutlined',
    'PackageSearchOutlined',
    'PackageXOutlined',
    'PackageOutlined',
    'PaintPourOutlined',
    'PaintOutlined',
    'PaletteOutlined',
    'PaperclipOutlined',
    'ParagraphSpacingOutlined',
    'ParagraphWrapOutlined',
    'ParkingOutlined',
    'PasscodeLockOutlined',
    'PasscodeOutlined',
    'PassportOutlined',
    'PauseCircleOutlined',
    'PauseSquareOutlined',
    'PenTool1Outlined',
    'PenTool2Outlined',
    'PenToolMinusOutlined',
    'PenToolPlusOutlined',
    'Pencil1Outlined',
    'Pencil2Outlined',
    'PencilLineOutlined',
    'PentagonOutlined',
    'Percent1Outlined',
    'Percent2Outlined',
    'Percent3Outlined',
    'Perspective1Outlined',
    'Perspective2Outlined',
    'Phone1Outlined',
    'Phone2Outlined',
    'PhoneCall1Outlined',
    'PhoneCall2Outlined',
    'PhoneHangUpOutlined',
    'PhoneIncoming1Outlined',
    'PhoneIncoming2Outlined',
    'PhoneOutgoing1Outlined',
    'PhoneOutgoing2Outlined',
    'PhonePauseOutlined',
    'PhonePlusOutlined',
    'PhoneXOutlined',
    'PhoneOutlined',
    'PieChart1Outlined',
    'PieChart2Outlined',
    'PieChart3Outlined',
    'PieChart4Outlined',
    'PiggyBank1Outlined',
    'PiggyBank2Outlined',
    'Pilcrow1Outlined',
    'Pilcrow2Outlined',
    'PilcrowSquareOutlined',
    'Pin1Outlined',
    'Pin2Outlined',
    'PlaceholderOutlined',
    'PlayCircleOutlined',
    'PlaySquareOutlined',
    'PlayOutlined',
    'PlugStation2Outlined',
    'PlusCircleOutlined',
    'PlusSquareOutlined',
    'PlusOutlined',
    'PodcastOutlined',
    'Power1Outlined',
    'Power2Outlined',
    'Power3Outlined',
    'PresentationChart1Outlined',
    'PresentationChart2Outlined',
    'PresentationChart3Outlined',
    'PrinterOutlined',
    'PuzzlePiece2Outlined',
    'PuzzlePieceOutlined',
    'QrCode1Outlined',
    'QrCode2Outlined',
    'ReceiptCheckOutlined',
    'ReceiptOutlined',
    'Recording1Outlined',
    'Recording2Outlined',
    'Recording3Outlined',
    'Reflect1Outlined',
    'Reflect2Outlined',
    'RefreshCcw1Outlined',
    'RefreshCcw2Outlined',
    'RefreshCcw3Outlined',
    'RefreshCcw4Outlined',
    'RefreshCcw5Outlined',
    'RefreshCw1Outlined',
    'RefreshCw2Outlined',
    'RefreshCw3Outlined',
    'RefreshCw4Outlined',
    'RefreshCw5Outlined',
    'Repeat1Outlined',
    'Repeat2Outlined',
    'Repeat3Outlined',
    'Repeat4Outlined',
    'ReverseLeftOutlined',
    'ReverseRightOutlined',
    'RightIndent1Outlined',
    'RightIndent2Outlined',
    'Rocket1Outlined',
    'Rocket2Outlined',
    'RollerBrushOutlined',
    'RouteOutlined',
    'Rows1Outlined',
    'Rows2Outlined',
    'Rows3Outlined',
    'Rss1Outlined',
    'Rss2Outlined',
    'RulerOutlined',
    'SafeOutlined',
    'Sale1Outlined',
    'Sale2Outlined',
    'Sale3Outlined',
    'Sale4Outlined',
    'Save1Outlined',
    'Save2Outlined',
    'Save3Outlined',
    'Scale1Outlined',
    'Scale2Outlined',
    'Scale3Outlined',
    'Scales1Outlined',
    'Scales2Outlined',
    'ScanOutlined',
    'Scissors1Outlined',
    'Scissors2Outlined',
    'ScissorsCut1Outlined',
    'ScissorsCut2Outlined',
    'SearchLgOutlined',
    'SearchMdOutlined',
    'SearchRefractionOutlined',
    'SearchSmOutlined',
    'Send1Outlined',
    'Send2Outlined',
    'Send3Outlined',
    'Server1Outlined',
    'Server2Outlined',
    'Server3Outlined',
    'Server4Outlined',
    'Server5Outlined',
    'Server6Outlined',
    'Settings1Outlined',
    'Settings2Outlined',
    'Settings3Outlined',
    'Settings4Outlined',
    'Share1Outlined',
    'Share2Outlined',
    'Share3Outlined',
    'Share4Outlined',
    'Share5Outlined',
    'Share6Outlined',
    'Share7Outlined',
    'Shield1Outlined',
    'Shield2Outlined',
    'Shield3Outlined',
    'ShieldDollarOutlined',
    'ShieldOffOutlined',
    'ShieldPlusOutlined',
    'ShieldTickOutlined',
    'ShieldZapOutlined',
    'ShoppingBag1Outlined',
    'ShoppingBag2Outlined',
    'ShoppingBag3Outlined',
    'ShoppingCart1Outlined',
    'ShoppingCart2Outlined',
    'ShoppingCart3Outlined',
    'Shuffle1Outlined',
    'Shuffle2Outlined',
    'Signal1OffOutlined',
    'Signal1Outlined',
    'Signal2OffOutlined',
    'Signal2Outlined',
    'Signal3Outlined',
    'SimcardOutlined',
    'SkewOutlined',
    'SkipBackOutlined',
    'SkipForwardOutlined',
    'SlashCircle1Outlined',
    'SlashCircle2Outlined',
    'SlashDividerOutlined',
    'SlashOctagonOutlined',
    'Sliders1Outlined',
    'Sliders2Outlined',
    'Sliders3Outlined',
    'Sliders4Outlined',
    'Snowflake1Outlined',
    'Snowflake2Outlined',
    'SpacingHeight1Outlined',
    'SpacingHeight2Outlined',
    'SpacingWidth1Outlined',
    'SpacingWidth2Outlined',
    'Speaker1Outlined',
    'Speaker2Outlined',
    'Speaker3Outlined',
    'Speedometer1Outlined',
    'Speedometer2Outlined',
    'Speedometer3Outlined',
    'Speedometer4Outlined',
    'SquareOutlined',
    'StandOutlined',
    'Star1Outlined',
    'Star2Outlined',
    'Star3Outlined',
    'Star4Outlined',
    'Star5Outlined',
    'Star6Outlined',
    'Star7Outlined',
    'Stars1Outlined',
    'Stars2Outlined',
    'Stars3Outlined',
    'StickerCircleOutlined',
    'StickerSquareOutlined',
    'StopCircleOutlined',
    'StopSquareOutlined',
    'StopOutlined',
    'Strikethrough1Outlined',
    'Strikethrough2Outlined',
    'StrikethroughSquareOutlined',
    'SubscriptOutlined',
    'SunSetting1Outlined',
    'SunSetting2Outlined',
    'SunSetting3Outlined',
    'SunOutlined',
    'SunriseOutlined',
    'SunsetOutlined',
    'SwitchHorizontal1Outlined',
    'SwitchHorizontal2Outlined',
    'SwitchVertical1Outlined',
    'SwitchVertical2Outlined',
    'TableOutlined',
    'Tablet1Outlined',
    'Tablet2Outlined',
    'Tag1Outlined',
    'Tag2Outlined',
    'Tag3Outlined',
    'Target1Outlined',
    'Target2Outlined',
    'Target3Outlined',
    'Target4Outlined',
    'Target5Outlined',
    'TelescopeOutlined',
    'TerminalBrowserOutlined',
    'TerminalCircleOutlined',
    'TerminalSquareOutlined',
    'TerminalOutlined',
    'TextInputOutlined',
    'Thermometer1Outlined',
    'Thermometer2Outlined',
    'Thermometer3Outlined',
    'ThermometerColdOutlined',
    'ThermometerWarmOutlined',
    'ThumbsDownOutlined',
    'ThumbsUpOutlined',
    'Ticket1Outlined',
    'Ticket2Outlined',
    'Toggle1LeftOutlined',
    'Toggle1RightOutlined',
    'Toggle2LeftOutlined',
    'Toggle2RightOutlined',
    'Toggle3LeftOutlined',
    'Toggle3RightOutlined',
    'Tool1Outlined',
    'Tool2Outlined',
    'TrainOutlined',
    'TramOutlined',
    'TransformOutlined',
    'Translate1Outlined',
    'Translate2Outlined',
    'Trash1Outlined',
    'Trash2Outlined',
    'Trash3Outlined',
    'Trash4Outlined',
    'TrendDown1Outlined',
    'TrendDown2Outlined',
    'TrendUp1Outlined',
    'TrendUp2Outlined',
    'TriangleOutlined',
    'Trophy1Outlined',
    'Trophy2Outlined',
    'Truck1Outlined',
    'Truck2Outlined',
    'Tv1Outlined',
    'Tv2Outlined',
    'Tv3Outlined',
    'Type1Outlined',
    'Type2Outlined',
    'TypeSquareOutlined',
    'TypeStrikethrough1Outlined',
    'TypeStrikethrough2Outlined',
    'Umbrella1Outlined',
    'Umbrella2Outlined',
    'Umbrella3Outlined',
    'Underline1Outlined',
    'Underline2Outlined',
    'UnderlineSquareOutlined',
    'Upload1Outlined',
    'Upload2Outlined',
    'Upload3Outlined',
    'Upload4Outlined',
    'UploadCloud1Outlined',
    'UploadCloud2Outlined',
    'UsbFlashDriveOutlined',
    'User1Outlined',
    'User2Outlined',
    'User3Outlined',
    'UserCheck1Outlined',
    'UserCheck2Outlined',
    'UserCircleOutlined',
    'UserDown1Outlined',
    'UserDown2Outlined',
    'UserEditOutlined',
    'UserLeft1Outlined',
    'UserLeft2Outlined',
    'UserMinus1Outlined',
    'UserMinus2Outlined',
    'UserPlus1Outlined',
    'UserPlus2Outlined',
    'UserRight1Outlined',
    'UserRight2Outlined',
    'UserSquareOutlined',
    'UserUp1Outlined',
    'UserUp2Outlined',
    'UserX1Outlined',
    'UserX2Outlined',
    'Users1Outlined',
    'Users2Outlined',
    'Users3Outlined',
    'UsersCheckOutlined',
    'UsersDownOutlined',
    'UsersEditOutlined',
    'UsersLeftOutlined',
    'UsersMinusOutlined',
    'UsersPlusOutlined',
    'UsersRightOutlined',
    'UsersUpOutlined',
    'UsersXOutlined',
    'VariableOutlined',
    'VideoRecorderOffOutlined',
    'VideoRecorderOutlined',
    'VirusOutlined',
    'VoicemailOutlined',
    'VolumeMaxOutlined',
    'VolumeMinOutlined',
    'VolumeMinusOutlined',
    'VolumePlusOutlined',
    'VolumeXOutlined',
    'Wallet1Outlined',
    'Wallet2Outlined',
    'Wallet3Outlined',
    'Wallet4Outlined',
    'Wallet5Outlined',
    'WatchCircleOutlined',
    'WatchSquareOutlined',
    'WavesOutlined',
    'Webcam1Outlined',
    'Webcam2Outlined',
    'WifiOffOutlined',
    'WifiOutlined',
    'Wind1Outlined',
    'Wind2Outlined',
    'Wind3Outlined',
    'XCircleOutlined',
    'XCloseOutlined',
    'XSquareOutlined',
    'XOutlined',
    'YoutubeOutlined',
    'ZapCircleOutlined',
    'ZapFastOutlined',
    'ZapOffOutlined',
    'ZapSquareOutlined',
    'ZapOutlined',
    'ZoomInOutlined',
    'ZoomOutOutlined'
  ]).isRequired
}

export default PROP_TYPES
