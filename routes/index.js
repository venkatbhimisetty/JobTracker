module.exports = {
    getHomePage: (req, res) => {
     //   let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

        // execute query
        
            res.render('index.ejs', {
                title: ""
                
            });
        
    },

    
    getJobStatusdrop : (req, res) => {

        let query = "CALL proclookupstatus()"; // query database to get all the status
    
        db.query(query, (err, result) => {
            
            if (err) {
                res.redirect('/');
    
            }
            else {
                res.status(200).json(result);
    
            }
        });

    },


    getbusinessunit: (req, res) => {
        let buquery = "CALL proclookupbu()";
        db.query(buquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    getsalesregionunit: (req, res) => {
        let salesquery = "CALL proclookupsalesregion()";
        db.query(salesquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },
    getsalesrepunit: (req, res) => {
        let salesrepquery = "CALL proclookupsalesrep()";
        db.query(salesrepquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    getcustomers: (req, res) => {
        let customerquery = "CALL proclookupcustomer()";
        db.query(customerquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },

    joblistingdetails: (req, res) => {
        let customerquery = "CALL proclistjobdescription()";
        db.query(customerquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    joblisting: (req, res) => {
        
        let jdid = req.params.i;
        

        let query = "CALL proclistjobdescriptionbyid('"+jdid+"')";
      
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    updatejoblisting: (req, res) => {
        
        let jobdescriptionid = req.body.jobdescriptionId;  
  
        let reqID = req.body.reqid;
        let joblocation = req.body.joblocation;
        let experience = req.body.experince;
        let expecteddate = req.body.expecteddate;
        let locationfelx = req.body.locaflex;
        let jobdescription = req.body.jobdescription;
        let bussinessunit = req.body.bussinessunit;
        let salesregion = req.body.salesregion; 
        let salesrep = req.body.salerep;
        let status = req.body.status;
        let primaryskill = req.body.primaryskill;
        let secondaryskill = req.body.secondaryskill;
      //  let createdby = req.body.cby_edit;
        let updateby = req.body.updateby;
        let noofpositions = req.body.noofpos;
        let role = req.body.role;
       // let createddate = req.body.cbydate_edit;
        let updatedtime =  req.body.updatedate;
        let dateofreq =   req.body.dateofreq;
        let customers =   req.body.customer;
        let jdcomments =   req.body.jdcomments;
        let bucomments =   req.body.bucomments;
       

        let query = "CALL procUpdatejobdescription('"+jobdescriptionid+"','"+reqID+"','"+role+"','"+noofpositions+"','"+dateofreq+"','"+experience+
        "','"+primaryskill+"','"+secondaryskill+"','"+expecteddate+"','"+locationfelx+"','"+customers+"','"+status+"','"+bussinessunit+"','"+salesregion+
        "','"+salesrep+"','"+joblocation+"','"+jobdescription+"','"+jdcomments+"','"+bucomments+"','"+updateby+"','"+updatedtime+"')";
        
        
        db.query(query, (err, result) => {
            if (err) {
             ;
                return res.status(500).send(err);
                
            }
            res.status(200).json(result);
           
        });
    },

    addjd : (req, res) => {
        let Requirement = req.body.Requirement;
        let Role = req.body.Role;
        let Position = req.body.Position;
        let Expected = req.body.Expected;
        let Exp = req.body.Exp;
        let PSkill = req.body.PSkill;
        let SSkill = req.body.SSkill;
        let locationflex = req.body.locationflex;
        let customerid = req.body.customerid;
        let Status = req.body.Status;
        let buid = req.body.buid;
        let salesregionid = req.body.salesregionid;
        let salesrepid = req.body.salesrepid;
        let joblocation = req.body.joblocation;
        let jDescription = req.body.jDescription;
        let buComments = req.body.buComments;
        let jdComments = req.body.jdComments;
        let createdby =  req.body.createdby;
        let updateby =  req.body.updateby;
        
        
    
        let query = "call procinsertjobdescription('" +
        Requirement + "', '" + Role + "', '" + Position + "', now(),'" + Exp + "','" + PSkill +
            "',  '" + SSkill + "','" + Expected + "', '" + locationflex + "', '" + customerid + "','" +
            Status + "','" + buid + "','" + salesregionid + "','" + salesrepid + "','" + joblocation + 
            "','" + jDescription + "','" + buComments + "','" + jdComments + "','" + createdby + "',now(),'" + updateby + "',now())";
       console.log(query);
    
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
            }  
            res.redirect('/');
           // console.log(result);
        });
    }
}
