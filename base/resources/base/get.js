var self = this;
        
if (!query.id) {
    dpd.customers.post({numberCase: 1}, function(results) {
    //   this.customers = results;
        console.log('customers result: ', results);
        console.log('self.id: ', self.id);
        dpd.base.put(self.id, {performer: results.id}, function(results) {
        console.log('result:', results);
        });
        console.log('\n');
    });
}

if (query.id) {
    console.log(query.id);
    console.log('once');
}