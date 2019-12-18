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
        
        let jobdescriptionid = req.body.jdiddisplayhidden;  
        console.log(jobdescriptionid);
        let reqID = req.body.reqid_display;
        let joblocation = req.body.jlid_edit;
        let experience = req.body.exp_edit;
        let expecteddate = req.body.expdate_edit;
        let locationfelx = req.body.lf_edit;
        let jobdescription = req.body.jd_edit;
        let bussinessunit = req.body.bu_edit;
        let salesregion = req.body.sregion_edit; 
        let salesrep = req.body.srep_edit;
        let status = req.body.statusp_edit;
        let primaryskill = req.body.ps_edit;
        let secondaryskill = req.body.ss_edit;
      //  let createdby = req.body.cby_edit;
        let updateby = req.body.uby_edit;
        let noofpositions = req.body.npos_edit;
        let role = req.body.role_edit;
       // let createddate = req.body.cbydate_edit;
        let updatedtime =  req.body.ubydate_edit;
        let dateofreq =   req.body.datereq_edit;
        let customers =   req.body.cust_edit;
        let jdcomments =   req.body.jdcomments;
        let bucomments =   req.body.bucomments;
       

        let query = "CALL procUpdatejobdescription('"+jobdescriptionid+"','"+reqID+"','"+role+"','"+noofpositions+"','"+dateofreq+"','"+experience+
        "','"+primaryskill+"','"+secondaryskill+"','"+expecteddate+"','"+locationfelx+"','"+customers+"','"+status+"','"+bussinessunit+"','"+salesregion+
        "','"+salesrep+"',,'"+joblocation+"','"+jobdescription+"','"+jdcomments+"','"+bucomments+"','"+updatedtime+"')";
        
        console.log(query);
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            console.log(result);
        });
    },


    addjd : (req, res) => {

        let buid = req.body.bu_unit;
        
        let salesregionid = req.body.sales_region;
        let salesrepid = req.body.sale_rep;
        let customerid = req.body.customer;
        let buComments = req.body.buComments;
        let Requirement = req.body.Requirementid;
        let Role = req.body.role;
        let Expected = req.body.ex_date;
        let dateofreq = '2019-09-17 17:03:39'; 
        let Position = req.body.positions;
        let Exp = req.body.experience;
        let Status = req.body.status;
        let PSkill = req.body.primary_skill;
        let SSkill = req.body.secondry_skill;
        let joblocation = req.body.job_location;
        let locationflex = req.body.loc_flex;
        let jDescription = req.body.job_description;
        let jdComments = req.body.jd_comments;
        let createdate = '2019-09-17 17:03:39';
        let updateby =  'admin';
         let updatetime =  '2019-09-17 17:03:39';
         let createdby =  'admin';
    
        let query = "call procinsertjobdescription('" +
        Requirement + "', '" + Role + "', '" + Position + "',  now() ,'" + Exp + "','" + PSkill +
            "',  '" + SSkill + "',  '" + Expected + "',  '" + locationflex + "', '" + customerid + "','" +
            Status + "','" + buid + "','" + salesregionid + "','" + salesrepid + "','" + joblocation + 
            "','" + jDescription + "','" + buComments + "','" + jdComments + "','" + createdby + "', now() ,'" + updateby + "',now() )";
        
    
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
            }  
            res.status(200).json(result);
    
        });
    }
}
