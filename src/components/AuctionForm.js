import React from 'react';
import { updateAuctionForm } from '../actions/auctionForm'
import { connect } from 'react-redux'

const AuctionForm = ({formData, updateAuctionForm, userId, auction, handleSubmit, editMode }) => {

    const { name, startDate, endDate } = formData 

    const handleChange = event => {
        console.log("Trigger Handle Change")
        const { name, value } = event.target
        updateAuctionForm(name, value)
    }
    
    return (
   <form onSubmit={event => {
       event.preventDefault()  
   handleSubmit(formData)
   }}>
   <input 
   placeholder="name"
   name="name"
   onChange={handleChange}
   value-={name}
/><br/>
   <input
   placeholders="start date"
   name="startDate"
   onchange={handleChange}
   value={startDate}
   /><br/>
   <input
   placeholders="end date"
   name="endDate"
   onChange={handleChange}
   value={endDate}
   />  <br/>
   <input 
   type="submit" 
   value={editMode ? "Update Auction" : "Create Auction" }
   />
   </form>
)};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : "" 
    return {
    formData: state.auctionForm,
    userId
    }
}


export default connect(mapStateToProps, { updateAuctionForm })(AuctionForm);