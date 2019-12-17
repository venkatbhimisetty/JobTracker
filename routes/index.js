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
    }

    

};