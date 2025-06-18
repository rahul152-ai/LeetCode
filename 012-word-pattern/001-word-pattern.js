/\*\*

- @param {string} pattern
- @param {string} s
- @return {boolean}
  \*/
  var wordPattern = function(pattern, s) {
  let sWords = s.split(" ");
  if(pattern.length !== sWords.length) return false;

          let map = {};

          for(let i = 0;i< pattern.length;i++){
              let key = pattern[i];
              let value = sWords[i];

              if(!map[key]){
                 let values = Object.values(map);

                 if(values.includes(value)){
                  return false;
                 }
              }else{
                  if(map[key]!== value) return false;
              }

              map[key] = value;
          }
          return true;

  };
