const Score = ({points}) => {
    return (
        <>
        {points !== 20 ? 
            <div style={{margin:'16px'}}><span style={{ borderRadius: '24px', backgroundColor: 'white', padding: '8px'}}>Votre score : {points} / 20</span></div>
            : 
             <div style={{margin:'16px'}}><span style={{ borderRadius: '24px', backgroundColor: 'white', padding: '8px'}}>Bravo !</span></div>
        }
        </>
    )
}

export default Score;