/*

  //<!-- Form starts -->
  
  
  
  
  
  
  //Drag and drop or click to upload
  //Upload your photo (JPG or PNG, max size: 500KB).
  
  
  
  
  
  
  
  
  
  
  
  //<!-- Form ends -->
  
  // <!-- Generated tickets starts -->
  
  // Congrats, <!-- Full Name -->! Your ticket is ready.
  
  // We've emailed your ticket to <!-- Email Address --> and will send updates in the run up to the event.
  
  // Coding Conf
  // Jan 31, 2025 / Austin, TX
  
  // <!-- Generated tickets ends -->
*/

function App() {

  return (
    <>
    <div className="flex flex-col gap-5 p-10 text-[20px]">
      <p className="text-center">Your Journey to Coding Conf 2025 Starts Here!</p>
      <p className="text-center">Secure your spot at next year's biggest coding conference.</p>
      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col items-start">
          <label htmlFor="fullName" className="text-[20px]">Upload Avatar</label>
          <input type="file" name="fullName" id="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[20px]">Full Name</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[20px]">Email Address</label>
          <input type="text" placeholder="example@email.com" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[20px]">GitHub Username</label>
          <input type="text" placeholder="@yourusername" />
        </div>
        <button className="bg-[--Orange-700] p-3 rounded-lg">Generate My Ticket</button>
      </form>
    </div>
    </>
  )
}

export default App
