import React,{useState,useRef,useCallback,useEffect} from 'react';
import './App.css';
import CollegeCard from './components/collegeCard';
import colleges from './components/colleges';


function App() {
 const [college,setCollege] = useState(colleges.slice(0,10));
 const [pageNo,setPageNo] = useState(10)
 const [loading,setLoading] = useState(false)
 const loader = useRef(null);

useEffect(() => {
  if(pageNo!=10){
    let newArray = colleges.slice(0,pageNo)
    setCollege(newArray)
  }
}, [pageNo])
 const handleObserver = useCallback((entries) => {
  const target = entries[0];
  if (target.isIntersecting) {
    setPageNo(prevState=>{
      return prevState+10
    })
  }
}, []);
useEffect(() => {
  const option = {
    root: null,
    rootMargin: "20px",
    threshold: 0
  };
  const observer = new IntersectionObserver(handleObserver, option);
  if (loader.current) observer.observe(loader.current);
}, [handleObserver]);
  return (
    <>
    <p className="title">Colleges in North India</p>
    <div className="Container">
      {college.map((item,index)=>{
        return <CollegeCard 
                  key={index}
                  {...item}
        />;
      })}
        
        
    </div>
    {loading && <p>Loading...</p>}
    <div ref={loader} />
    </>
  );
}

export default App;