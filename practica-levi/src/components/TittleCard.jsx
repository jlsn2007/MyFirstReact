import './TittleCard.css'

const Fr =()=>{


    return(
        
        <div>
            <button type="button" className='fr'>
                Follow Request
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">Unread follow request</span>
                    </span>
                    </button>
        </div>
        
        
    )
}

export default Fr