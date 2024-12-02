"use strict";
const root = "/api/v1";
const pgTaskQueries = require("../db/queries/tasks");

module.exports = async function (fastify, opts) {
  // Get all tasks
  fastify.get(`${root}/`, async function (request, reply) {
    try {
      const result = await fastify.pg.query(pgTaskQueries.getAll);
      reply.send({ data: result.rows });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });

  // Get task
  fastify.get(`${root}/:id`, async function (request, reply) {
    try {
      const result = await fastify.pg.query(pgTaskQueries.getById, [
        request.params.id,
      ]);
      reply.send({ data: result.rows });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });

  // Create new task
  fastify.post(`${root}/`, async function (request, reply) {
    try {
      const result = await fastify.pg.query(pgTaskQueries.create, [
        request.body.title,
        request.body.description,
      ]);
      reply.send({ data: result.rows });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });

  // Update task
  fastify.put(`${root}/:id`, async function (request, reply) {
    try {
      const result = await fastify.pg.query(pgTaskQueries.update, [
        request.body.title,
        request.body.description,
        request.params.id,
      ]);
      reply.send({ data: result.rows });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });

  // Delete task
  fastify.delete(`${root}/:id`, async function (request, reply) {
    try {
      const result = await fastify.pg.query(pgTaskQueries.delete, [
        request.params.id,
      ]);
      reply.send({ data: result.rows });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });
};
