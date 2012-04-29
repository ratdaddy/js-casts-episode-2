var page = require('../models/page');

exports.index = function(req, res) {
  page.all(function(err, names) {
    res.render('pages/index', { title: 'Pages', names: names });
  });
};

exports.show = function(req, res) {
  var name = req.params.name;
  page.find(name, function(err, body) {
    res.render('pages/show', { title: 'Page: ' + name, name: name, body: body });
  });
};

exports.new = function(req, res) {
  res.render('pages/new', { title: 'New Page' });
};

exports.create = function(req, res) {
  var data = req.body.page;
  page.create(data.name, data.body, function() {
    res.redirect('/pages/' + data.name);
  });
};

exports.edit = function(req, res) {
  var name = req.params.name;
  page.find(name, function(err, body) {
    res.render('pages/edit', { title: 'Edit Page: ' + name, page: { name: name, body: body } });
  });
};

exports.update = function(req, res) {
  var name = req.params.name;
  page.update(name, req.body.page.body, function() {
    res.redirect('/pages/' + name);
  });
};

exports.destroy = function(req, res) {
  page.remove(req.params.name, function() {
    res.redirect('/pages');
  });
};
