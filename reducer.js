const count=5;

export default function reducer(state=count,action){
    const {type}=action;//const{type,payload}=action; //depend upon type in further dispatch the actions to store
    switch(type){               
        case "INCREMENT":
            return count+1;
        case "DECREMENT":
            return count-1;
        default:
            return count;
    }
}
