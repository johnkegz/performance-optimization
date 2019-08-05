//Get data function
let counter = 0;
const getData = () => {
    console.log('hello ++', counter++)
    return true;
}

//implement debouncing
const debounceGetData = (fn, delay) => {
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {fn.apply(this, null)}, delay)
    }
}

const callGetData = debounceGetData(getData, 100);
