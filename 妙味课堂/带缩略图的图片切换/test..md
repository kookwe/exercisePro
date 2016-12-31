str.slice(beginSlice[, endSlice])。slice() 提取的新字符串包括beginSlice但不包括 endSlice。
例如str.slice(1, 4) 提取新字符串从第二个字符到第四个 (字符索引值为 1, 2, 和 3)；
var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);
var str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'