-- CreateTable
CREATE TABLE "province" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "province_id" INTEGER NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "province_pkey" PRIMARY KEY ("province_id")
);

-- CreateTable
CREATE TABLE "district" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "district_id" INTEGER NOT NULL,
    "province_id" INTEGER NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "district_pkey" PRIMARY KEY ("district_id")
);

-- CreateTable
CREATE TABLE "ward" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "ward_id" INTEGER NOT NULL,
    "district_id" INTEGER NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ward_pkey" PRIMARY KEY ("ward_id")
);

-- CreateTable
CREATE TABLE "user_maket" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "birthday" DATE NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "service_charge" INTEGER,
    "phone" TEXT NOT NULL,
    "name_maket" TEXT NOT NULL,
    "image_maket_reasise" TEXT,
    "image_maket" TEXT,
    "time_open" TIME NOT NULL,
    "time_close" TIME NOT NULL,
    "is_veriy_phone" BOOLEAN NOT NULL DEFAULT false,
    "is_veriy_email" BOOLEAN NOT NULL DEFAULT false,
    "is_maket_food" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_updated" BOOLEAN NOT NULL DEFAULT false,
    "token" TEXT,
    "accessToken" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,
    "deleted_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_by" TEXT,
    "total_product_system" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_maket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_system" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "birthday" DATE NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image_readsize" TEXT,
    "image" TEXT,
    "service_charge" INTEGER,
    "phone" TEXT NOT NULL,
    "is_veriy_phone" BOOLEAN NOT NULL DEFAULT false,
    "is_veriy_email" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_updated" BOOLEAN NOT NULL DEFAULT false,
    "token" TEXT,
    "accessToken" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,
    "deleted_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_by" TEXT,

    CONSTRAINT "user_system_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category-system-key-seach" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,
    "deleted_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_by" TEXT,

    CONSTRAINT "category-system-key-seach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category-system" (
    "id" SERIAL NOT NULL,
    "uuid" UUID DEFAULT uuid_generate_v4(),
    "name" TEXT,
    "image_reasize" TEXT,
    "image" TEXT,
    "path" TEXT,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_updated" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,
    "deleted_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_by" TEXT,

    CONSTRAINT "category-system_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product-system" (
    "id" SERIAL NOT NULL,
    "uuid" UUID DEFAULT uuid_generate_v4(),
    "name" TEXT,
    "image_reasize" TEXT,
    "image" TEXT,
    "path" TEXT,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "price_discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "price_from" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "price_to" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "perccent_discount" INTEGER NOT NULL DEFAULT 0,
    "category_uuid" TEXT,
    "category_system_uuid" TEXT,
    "sold" INTEGER NOT NULL DEFAULT 0,
    "following" INTEGER NOT NULL DEFAULT 0,
    "user_following" INTEGER NOT NULL DEFAULT 0,
    "user_maket_uuid" UUID NOT NULL,
    "quantity_in_stock" INTEGER NOT NULL DEFAULT 0,
    "origin" TEXT,
    "description" TEXT,
    "sent_from" TEXT,
    "address" TEXT,
    "review_star" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "is_in_the_price" BOOLEAN NOT NULL DEFAULT false,
    "is_discount" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_updated" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,
    "deleted_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_by" TEXT,

    CONSTRAINT "product-system_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "province_uuid_key" ON "province"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "district_uuid_key" ON "district"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ward_uuid_key" ON "ward"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_maket_uuid_key" ON "user_maket"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_system_uuid_key" ON "user_system"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "category-system-key-seach_uuid_key" ON "category-system-key-seach"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "category-system_uuid_key" ON "category-system"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "product-system_uuid_key" ON "product-system"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "product-system_category_uuid_key" ON "product-system"("category_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "product-system_category_system_uuid_key" ON "product-system"("category_system_uuid");

-- AddForeignKey
ALTER TABLE "district" ADD CONSTRAINT "district_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "province"("province_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ward" ADD CONSTRAINT "ward_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "district"("district_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product-system" ADD CONSTRAINT "product-system_user_maket_uuid_fkey" FOREIGN KEY ("user_maket_uuid") REFERENCES "user_maket"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
