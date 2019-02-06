var list = [
  {
    "name": "angry",
    "term": [
      "disapprove",
      "emoticon",
      "face",
      "mad",
      "upset"
    ]
  },
  {
    "name": "frown",
    "term": [
      "disapprove",
      "emoticon",
      "face",
      "rating",
      "sad"
    ]
  },
  {
    "name": "laugh",
    "term": [
      "LOL",
      "emoticon",
      "face",
      "laugh"
    ]
  }];

var options = {
  threshold: 0.3,
  keys: [
    "name",
    "term"
  ]
};

var fuse = new Fuse(list, options);
var result = fuse.search("sad"); //検索クエリ
console.log(result); // 検索結果がコンソールに表示されます
