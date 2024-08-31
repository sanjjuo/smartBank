import Withdraw from "../Model/withdrawModel";

const withDrawMoney = async(req,res) =>{
    const { accountNumber, withdrawAmount, paymentMethod } = req.body;
    const userId =  req.user._id

    try{
        const newWithDrawTransaction = new Withdraw({
            user: userId,
            accountNumber: accountNumber,
            withdrawAmount: withdrawAmount,
            withdrawDate: new Date().toLocaleDateString(), // Format the date
            withdrawTime: new Date().toLocaleTimeString(), // Format the time
            paymentMethod: paymentMethod
        })

        const savedWithDrawTransaction = await newWithDrawTransaction.save()
        res.status(201).json(savedWithDrawTransaction)
    }catch(error){
        console.log(error);
        res.status(500).json({success: false, message: "Error in withdrawing money", error})
    }
}

export {withDrawMoney}