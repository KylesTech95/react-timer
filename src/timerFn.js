 const timerFn = function(fn,time){
    var cancel,nextAt,timeout,wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    //Wrapper function for set Timeout
    wrapper = function(){
      nextAt+=time;
      timeout = setTimeout(wrapper,nextAt - new Date().getTime());
      return fn()
    };
    //cancel function
    cancel = function(){
      return clearTimeout(timeout)
    };
    //set Timeout
    timeout = setTimeout(wrapper,nextAt - new Date().getTime());
    return {
      cancel:cancel
    }
  }
  export default timerFn