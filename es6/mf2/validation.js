const isValid = ({ title, length, genre }) => {

    if (!title || !length || !genre) {

        return false;
    }

    if (typeof length !== "string") {
        return false;
    }

    if (length > 250) {
        return false;
    }

    return true;
}

module.exports = isValid;