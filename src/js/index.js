//Get data function
let counter = 0;
const getData = () => {
    console.log('hello ++', counter++)
    return true;
}

//implement debouncing
const debounce = (fn, delay) => {
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {fn.apply(this, null)}, delay)
    }
}

const callGetData = debounce(getData, 100);

//implement throttling
const throttle = (fn, limit) => {
    let flag = true;
    return function(){
        if(flag){
            fn.apply(this, null);
            flag = false;
            setTimeout(() => {flag = true}, limit)
        }
    }
}

const callGetDataThrottling = throttle(getData, 900);