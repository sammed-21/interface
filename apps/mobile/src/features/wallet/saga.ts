import { StackActions } from '@react-navigation/core'
import { dispatchNavigationAction } from 'src/app/navigation/rootNavigation'
import { call, put, takeEvery } from 'typed-redux-saga'
import i18n from 'uniswap/src/i18n/i18n'
import { MobileScreens } from 'uniswap/src/types/screens/mobile'
import { pushNotification } from 'wallet/src/features/notifications/slice'
import { AppNotificationType } from 'wallet/src/features/notifications/types'
import { restoreMnemonicComplete } from 'wallet/src/features/wallet/slice'

/**
 * Watch when we've restored a mnemonic (new phone migration)
 */
export function* restoreMnemonicCompleteWatcher() {
  yield* takeEvery(restoreMnemonicComplete, onRestoreMnemonicComplete)
}

function* onRestoreMnemonicComplete() {
  yield* put(
    pushNotification({
      type: AppNotificationType.Success,
      title: i18n.t('notification.restore.success'),
    }),
  )
  yield* call(dispatchNavigationAction, StackActions.replace(MobileScreens.Home))
}
