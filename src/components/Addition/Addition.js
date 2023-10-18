



const observer = new IntersectionObserver(  (entrise) => {
    entrise.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    }
    )

}

)



const hiddenElement = document.querySelectorAll('section');
hiddenElement.forEach((element) =>observer.observe(element))



 const Addition = () => {
  return (
    <div>{hiddenElement.forEach((element) =>observer.observe(element))
    }</div>
  )
}


export default Addition