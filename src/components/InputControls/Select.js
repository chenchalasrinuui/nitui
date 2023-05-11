import React from 'react'

export const Select = (props) => {
    const {lbl,name,options,fnChange,val,errorMsg,isShowErrorMsg} =props;

  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl} : </b>
        </div>
        <div className='col-sm-3'>
           <select name={name} onChange={fnChange}  className='form-control'>
                <option value="">Please Select</option>
                {
                    options.map((value,ind)=>{
                        return <option selected={value==val} key={ind} value={value}>{value}</option>
                    })
                }
           </select>
        </div>
        <div className='col-sm-4'>
        {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}
