//1) You are given an array like this You should create an object like this:
let treeNodes = [
  { id: 0, children: [1, 2] },
  { id: 1, children: [3, 4] },
  { id: 2, children: [5] },
  { id: 3, children: [] },
  { id: 4, children: [6] },
  { id: 5, children: [] },
  { id: 6, children: [] },
];
function createTree(nodes, parent, children = []) {
  parent = parent ?? "Not defined";
  if (parent === "Not defined") {
    let a = treeNodes.map((el) => el.id);
    let b = treeNodes.map((el) => el.children);
    let onlyParent;
    l1: for (let l = 0; l < a.length; l++) {
      let isOnlyParent = true;
      for (let j = 0; j < b.length; j++) {
        if (b[j].some((el) => el === a[l])) {
          isOnlyParent = false;
          continue l1;
        }
      }
      if (isOnlyParent) {
        onlyParent = a[l];
        break l1;
      }
    }
    parent = {};
    parent[onlyParent] = {};
    let res = createTree(
      nodes,
      parent[onlyParent],
      nodes.filter((el) => el.id === onlyParent)[0].children
    );
    parent[onlyParent] = res;
  } else {
    for (let i = 0; i < children.length; i++) {
      parent[children[i]] = {};
      if (
        nodes.filter((el) => el.id === children[i])[0].children[0] !== undefined
      ) {
        parent[children[i]] = createTree(
          nodes,
          parent[children[i]],
          nodes.filter((el) => el.id === children[i])[0].children
        );
      }
    }
  }
  return parent;
}

//2) You are given an array like this You should create an object like this:
let treeNodes1 = [
  { parent: null, id: 0 },
  { parent: 0, id: 1 },
  { parent: 0, id: 2 },
  { parent: 1, id: 3 },
  { parent: 1, id: 4 },
  { parent: 2, id: 5 },
  { parent: 4, id: 6 },
];
function createTree1(nodes, parentId, parent) {
  parentId = parentId ?? "Not defined";
  let onlyParentId;
  if (parentId === "Not defined") {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].parent === null) {
        onlyParentId = nodes[i].id;
        break;
      }
    }
    let parent = {};
    parent[onlyParentId] = {};
    parent[onlyParentId] = createTree1(
      nodes,
      onlyParentId,
      parent[onlyParentId]
    );
    return parent;
  } else {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].parent === parentId) {
        parent[nodes[i].id] = {};
        parent[nodes[i].id] = createTree1(
          nodes,
          nodes[i].id,
          parent[nodes[i].id]
        );
      }
    }
    return parent;
  }
}
console.log(createTree1(treeNodes1));
