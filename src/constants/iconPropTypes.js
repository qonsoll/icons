import PropTypes from 'prop-types'

const PROP_TYPES = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  name: PropTypes.oneOf([
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
    'PlusOutlined',
    'LanguageOutlined'
  ]).isRequired
}

export default PROP_TYPES
