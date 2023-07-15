import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {IdentitySub} from '../../../../../model'
import {unwrapData} from '../../../../../utils'
import {encodeAddress} from '../../../../subsocial'
import {CallItem, MappingContext, Pallet, PalletCalls} from '../../../interfaces'
import {IdentityRenameSubCall} from '../../../types/calls'
import {parent} from '../parent'

export const calls: PalletCalls = {
    ...parent.PalletIdentity.calls,
    rename_sub: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const renameSubData = new IdentityRenameSubCall(ctx, item.call).asV2015

        const subId = encodeAddress(renameSubData.sub)
        const sub = ctx.store.defer(IdentitySub, subId)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('identity_renameSub', {
                sub: () => sub.getOrFail(),
                name: unwrapData(renameSubData.data),
            })
    },
}

export const PalletIdentity: Pallet = {
    ...parent.PalletIdentity,
    calls,
}
