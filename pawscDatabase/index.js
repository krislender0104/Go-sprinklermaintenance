var mysql = require('mysql');
var db = require('./schemas/pawsc');
var pawsc = {
 getusers: function (callback) {
  return db.query("select * from users", callback);
 },
 adduser: function(user, callback) {
 	console.log("insert - " + JSON.stringify(pawsc));
  return db.query("insert into users (fullname, nickname, password, updated_at) values (?, ?, ?, ?)", [user.fullname, user.nickname, user.password, new Date()], callback);
 },
 deleteuser: function(user, callback) {
  return db.query("delete from users where id=?, [user.id]", callback);
 },
 login: function(room, user, callback) {
  if (room != undefined && user != undefined)
   return db.query("select users.user from pawsc where room=? and nickname=? and toWhom=? or room=? and nickname=?  ", [room, user], callback);
  return {login: {user:'', room:'', msg:'invalid'}};
 },
sampleRadiusQuery: function (lat, lng){
  /*  SELECT *
      FROM(
        SELECT r.name, r.category, r._address, r.city, r.state, r.lat, r.long, domaintable.domain,
        MATCH(name, category) AGAINST('kennedy middle school%') as relevance,
        p.radius,
        p.distance_unit
        * DEGREES(ACOS(COS(RADIANS(p.latpoint))
          * COS(RADIANS(r.lat))
          * COS(RADIANS(p.longpoint - r.long))
          + SIN(RADIANS(p.latpoint))
          * SIN(RADIANS(r.lat)))) AS distance
  FROM nametable_db AS r
  JOIN(
          SELECT  28.5383355  AS latpoint, -81.37923649999999 AS longpoint,
          5 AS radius, 69.0 AS distance_unit
        ) AS p
    INNER JOIN domaintable.domain ON
    r.state = domaintable.domain
  WHERE 
    MATCH(name, category) against('kennedy middle school*' in boolean mode) AND
    r.lat
     BETWEEN p.latpoint - (p.radius / p.distance_unit)
         AND p.latpoint + (p.radius / p.distance_unit)
    AND r.long
     BETWEEN p.longpoint - (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
         AND p.longpoint + (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
      ) AS d
WHERE distance <= radius
ORDER BY distance */
 }
};
exports.pawsc = pawsc;
