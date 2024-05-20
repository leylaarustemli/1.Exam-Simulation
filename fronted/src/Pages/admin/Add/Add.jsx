import React, { useContext } from 'react'
import { Formik } from 'formik';
import "./Add.css"
import axios from 'axios';
import MainContext from '../../../Context/Context';
const Add = () => {
  const{data,setData}=useContext(MainContext)
  return (
    <div>
      <Formik
       initialValues={{ title: '', image: '',price:'',category:'',description:'' }}
       validate={values => {
      
       }}
       
       onSubmit={(values, { setSubmitting }) => {
       axios.post("http://localhost:5000/api/products",{
        title:values.title,
        image:values.image,
        price:values.price,
        category:values.category,
        description:values.description
       }).then(res=>{
        setData([...data,res.data])
       })
      }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
             placeholder='Title'
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder='Image'
           />
           {errors.image && touched.image && errors.image}
           <input
             type="number"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
             placeholder='Price'
           />
           {errors.price && touched.price && errors.price}
           <input
             type="text"
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.category}
             placeholder='Description'
           />
           {errors.category && touched.category && errors.category}
           <input
             type="text"
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.category}
             placeholder='Description'
           />
           {errors.description && touched.description && errors.description}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add