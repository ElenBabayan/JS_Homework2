// Problem 5

function buildTree(treeNodes) {
    const tree = {};
    treeNodes.forEach(element => {
        // root of the tree
        if(element.parent == null) {
            tree[element.id] = {};
            console.log(tree[element.id]);
        }
        else {
            const curr = getObjectRecursive(tree, element.parent);
            curr[element.id] = {};
        }
    
    });

    return tree;
}

function getObjectRecursive(tree, parent) {
    if(tree.hasOwnProperty(parent)) {
        return tree[parent];
    }

    for(let prop in tree) {

        return getObjectRecursive(tree[prop], parent);
    }
}

var treeNodes = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
]

let resultTree = buildTree(treeNodes);
