function Page_404() {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/icon_1.png'}></img>
            <h4>존재하지 않는 페이지입니다.</h4>
        </div>
        
    )
}

export default Page_404;