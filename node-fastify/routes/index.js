"use strict";
const root = "/api/v1";
const { taskQueries } = require("../../utils/queries/js/tasks");

module.exports = async function (fastify, opts) {
  // Get all tasks
  fastify.get(`${root}/`, async function (request, reply) {
    try {
      const result = await fastify.pg.query(taskQueries.getAll);
      reply.send({ data: result.rows });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });

  // Get task
  fastify.get(`${root}/:id`, async function (request, reply) {
    try {
      const result = await fastify.pg.query(taskQueries.getById, [
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
      const result = await fastify.pg.query(taskQueries.create, [
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
      const result = await fastify.pg.query(taskQueries.update, [
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
      const result = await fastify.pg.query(taskQueries.delete, [
        request.params.id,
      ]);
      reply.send({ data: result.rows });
    } catch (err) {
      reply.status(500).send({ error: err.message });
    }
  });
};
