import React, { Fragment, cloneElement } from 'react'
import ICONS_NAMES from '../../constants/namesMap'
import PropTypes from 'prop-types'

const Icon = (props) => {
  const { name, fill, size } = props

  const isIconExist = !!ICONS_NAMES?.[name]

  return (
    <Fragment>
      {isIconExist ? cloneElement(ICONS_NAMES?.[name], { fill, size }) : null}
    </Fragment>
  )
}

Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  name: PropTypes.oneOf([
    'ActivitiesFilled',
    'AlertDangerWarningFilled',
    'AlertInfoFilled',
    'AppointmentFilled',
    'ArrowLongDownFilled',
    'ArrowLongLeftFilled',
    'ArrowLongRightFilled',
    'ArrowLongUpFilled',
    'ArrowShortDownFilled',
    'ArrowShortLeftFilled',
    'ArrowShortRightFilled',
    'ArrowShortUpFilled',
    'BioflowFilled',
    'BioGroupFilled',
    'BroomFilled',
    'CalendarFilled',
    'CameraFilled',
    'CategoryFilled',
    'ChartBarFilled',
    'ChartPieFilled',
    'CheckmarkFilled',
    'ClinicFilled',
    'ClockFilled',
    'CloseFilled',
    'DisorderFilled',
    'DocFilled',
    'EditFilled',
    'EvaluationStateFilled',
    'FileFilled',
    'FileAddFilled',
    'FileDownloadFilled',
    'FileFailFilled',
    'FileUploadFilled',
    'FilterFilled',
    'FoihelseFilled',
    'FolderFilled',
    'FormFilled',
    'HeartFilled',
    'HideFilled',
    'HistoryFilled',
    'HomeFilled',
    'ImageFilled',
    'InvoiceFilled',
    'LocationFilled',
    'LockFilled',
    'LoginFilled',
    'LogoutFilled',
    'MailFilled',
    'MenuFilled',
    'MessageFilled',
    'MessageSendFilled',
    'MicrophoneOffFilled',
    'MicrophoneOnFilled',
    'MinusFilled',
    'NotificationFilled',
    'PackageFilled',
    'PasswordFilled',
    'PatientFilled',
    'PatientAddFilled',
    'PatientsFilled',
    'PhoneFilled',
    'PhoneCallingFilled',
    'PhoneCallMissedFilled',
    'PhoneCallMuttedFilled',
    'PlayFilled',
    'PlusFilled',
    'SearchFilled',
    'SendFilled',
    'SettingsFilled',
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
    'VideoOffFilled',
    'VideoOnFilled',
    'VippsFilled',
    'VolumeDownFilled',
    'VolumeOffFilled',
    'VolumeUpFilled',
    'WalletFilled',
    'PlusOutlined'
  ]).isRequired
}

export default Icon
