import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {RenameSubAction} from '../../../../../action'
import {IdentitySub} from '../../../../../model'
import {unwrapData} from '../../../../../utils'
import {encodeAddress} from '../../../../subsocial'
import {IdentityRenameSubCall} from '../../../types/calls'
import {parent} from '../parent'
import {CallItem, PalletCalls} from '../../../interfaces'

export const calls: PalletCalls = {
    ...parent.PalletIdentity.calls,
    rename_sub: function (ctx: DataHandlerContext<StoreWithCache, unknown>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const renameSubData = new IdentityRenameSubCall(ctx, item.call).asV2015

        const subId = encodeAddress(renameSubData.sub)
        const sub = ctx.store.defer(IdentitySub, subId)

        return [
            new RenameSubAction(block, item.extrinsic, {
                sub: () => sub.getOrFail(),
                name: unwrapData(renameSubData.data)!,
            }),
        ]
    },
}

export const PalletIdentity = {
    ...parent.PalletIdentity,
    calls,
}
