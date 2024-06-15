/*
  Warnings:

  - A unique constraint covering the columns `[app_client_id]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[app_client_secret]` on the table `App` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "App_app_client_id_key" ON "App"("app_client_id");

-- CreateIndex
CREATE UNIQUE INDEX "App_app_client_secret_key" ON "App"("app_client_secret");
