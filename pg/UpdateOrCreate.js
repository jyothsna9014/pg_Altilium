


const updateOrCreate = (model, where, newItem, beforeCreate) => {
    // Try to find record using findOne
    return model.
        findOne({ where })
        .then(item => {
            if (!item) {
                // Item doesn't exist, so we create it
                // Custom promise to add more data to the record
                // Being saved (optional)
                Promise.resolve(beforeCreate)
                    .then(() =>
                        model.create(newItem)
                            .then(item => ({ item, created: true }))
                    )
            }
            // Item already exists, so we update it
            return model
                .update(newItem, { where: where })
                .then(item => ({ item, created: false }))
        })

}

module.exports = { updateOrCreate };