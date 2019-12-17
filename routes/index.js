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
            console.log(result);
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
        let updateby =  '2019-09-17 17:03:39';
        let updatetime =  '2019-09-17 17:03:39';
        let createdby =  '2019-09-17 17:03:39';
    
        let query = "call procinsertjobdescription('" +
        Requirement + "', '" + Role + "', '" + Position + "', '" + dateofreq + "','" + Exp + "','" + PSkill +
            "',  '" + SSkill + "',  '" + Expected + "',  '" + locationflex + "', '" + customerid + "','" +
            Status + "','" + buid + "','" + salesregionid + "','" + salesrepid + "','" + joblocation + 
            "','" + jDescription + "','" + buComments + "','" + jdComments + "','" + createdby + "','" + createdate + "','" + updateby + "','" + updatetime + "')";
        console.log(query);
    
        db.query(query, (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err);
            }  
            res.status(200).json(result);
    
        });
    }
}
