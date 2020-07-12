const Mutations = {
    async createItem(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            },
        }, info);
        return item;
    },
    updateItem(parent, args, ctx, info) {
        const updates = { ...args };
        // remove id from updates
        delete updates.id;
        // run update method
        return ctx.db.mutaion.updateItem({
            data: updates,
            where: {
                id: args.id
            }
        }, info
        );
    },
    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };
        // find item
        const item = await ctx.db.query.item({ where }, `{ id title}`);
        // check if user has permissions 

        // delete it
        return ctx.db.mutation.deleteItem({ where }, info)
    }
};

module.exports = Mutations;
