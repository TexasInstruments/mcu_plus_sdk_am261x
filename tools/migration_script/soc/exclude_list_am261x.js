const exclude_list = [
    ".git",
    "docs",
    "docs_src",
    "test",
    "examples/drivers/sdfm"
];


function getExcludeList() {
    return exclude_list;
}

module.exports = {
    getExcludeList,
};
