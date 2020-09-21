module.exports.postCreate = async (req, res, next) => {
    let errors = [];
    if(!req.body.name) {
        errors.push('Please enter a name...');
    }
    if(!req.body.phone) {
        errors.push('Please enter a phone number...');
    }
    if(errors.length) {
        res.render('./users/create', { 
            errors: errors,
            info: req.body
        });
        return;
    }

    next();
}