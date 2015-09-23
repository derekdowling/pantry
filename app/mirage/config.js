import jsonapi from './jsonapi-helper';

export default function() {

  this.get('/lists', function(db) {
    return jsonapi.serialize(db.lists);
  });

  this.get('/lists/:id', function(db, request) {
    var id = request.params.id;
    return jsonapi.serialize(db.lists.find(id));
  });

  this.post('/lists', function(db, request) {
    var attrs = JSON.parse(request.requestBody);
    var secret = db.lists.insert(jsonapi.deserialize(attrs));
    return jsonapi.serialize(secret);
  });

  this.delete('/lists/:id');

  this.patch('/lists/:id', function(db, request) {
    var id = request.params.id;
    var secret = JSON.parse(request.requestBody);
    return jsonapi.serialize(
      db.lists.update(
        id,
        jsonapi.deserialize(secret)
      )
    );
  });
}
