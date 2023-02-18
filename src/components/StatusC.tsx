type statusProps = {
    msg : 'loading' | 'success' | 'error'; 
}
const StatusC = ({ msg } : statusProps) => {
    
    let message;
    if(msg === 'loading'){
        message = 'data is loading...';
    }
    else if (msg === 'success') {
        message = 'data fetched successfully...';
    }
    else if (msg === 'error') {
        message = 'error fetching data...';
    }

    return (
    <div>StatusC - { message  }</div>
  )
}

export default StatusC