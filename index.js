import DragFile from "./components/DragFile";
const Upload = () => {
  return (
    <div className="w-full relative rounded-lg bg-white overflow-hidden flex flex-col items-center justify-start pt-8 pb-[72px] pr-8 pl-[35px] box-border gap-[25px] text-left text-xs text-black font-drop-menu-menu">
      <header className="self-stretch h-16 flex flex-row items-end justify-between text-center text-xs text-black1 font-label-small">
        <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="rounded-lg bg-grey-01 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.1)_inset] flex flex-row items-center justify-center p-1 gap-[4px]">
            <button className="cursor-pointer [border:none] py-[7px] pr-4 pl-5 bg-black1 rounded-lg flex flex-row items-center justify-center">
              <div className="relative text-xs leading-[14px] font-semibold font-label-small text-white text-center">
                New Upload
              </div>
            </button>
            <div className="rounded-[40px] bg-grey-01 h-7 hidden flex-row items-center justify-end py-[7px] px-5 box-border">
              <div className="self-stretch relative leading-[14px] font-semibold">
                Recent
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[41.8px] w-[41.6px] relative"
          loading="eager"
          alt=""
          src="/vuesaxoutlineclosecircle.svg"
        />
      </header>
      <div className="w-[824px] flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[23px]">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between py-[11px] pr-[19px] pl-[17px] border-[1.3px] border-solid border-blues-gray2">
              
              <div className="flex flex-row items-center justify-center">
                <input className="w-[49px] [border:none] [outline:none] bg-[transparent] h-[18px] flex flex-row items-center justify-start font-drop-menu-menu font-medium text-xs text-black" type="text" placeholder="Branch" />
              </div>
            </div>
            
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between py-[11px] pr-[19px] pl-[17px] border-[1.3px] border-solid border-blues-gray2">
              <div className="flex flex-row items-center justify-center">
                <input className="w-[51px] [border:none] [outline:none] bg-[transparent] h-[18px] flex flex-row items-center justify-start  font-medium text-xs text-black" type="value" placeholder="Semester" />
              </div>
            </div>
           
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between py-[11px] pr-[19px] pl-[17px] border-[1.3px] border-solid border-blues-gray2">
              <div className="flex flex-row items-center justify-center">
                <input className="w-[51px] [border:none] [outline:none] bg-[transparent] h-[18px] flex flex-row items-center justify-start font-drop-menu-menu font-medium text-xs text-black" type="text" placeholder="Subject" />
              </div>
            </div>
          </div>  
        </div>            
                    
    <br/>                
    <div className="w-[25px] h-[3px] relative rounded-[50%] bg-gainsboro hidden" />
      <section className="w-[824px] flex flex-col items-center justify-start gap-[26px]">
        <footer className="self-stretch rounded-lg bg-grey-01 flex flex-row items-center justify-center p-8 text-center text-[14px] text-grey-05 font-sf-pro-display">
          <div className="flex-1 rounded-3xl flex flex-row items-center justify-center py-[132px] px-[30px] border-[2px] border-dashed border-grey-03">
            <div className="flex-1 relative opacity-[0.5]">
             <DragFile/>
            </div>
          </div>
        </footer>
        <div className="w-[248px] flex flex-row items-start justify-start py-0 pr-0 pl-[30px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
            <button className="cursor-pointer p-3 bg-white flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-iris-100">
              <div className="relative text-base leading-[100%] font-label-small text-iris-100 text-left">
                Cancel
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-3 bg-iris-100 flex-1 rounded flex flex-row items-center justify-center">
              <div className="relative text-base leading-[100%] font-label-small text-blue-gray-50 text-left">
                Submit
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
   </div> 
  );
};

export default Upload;
