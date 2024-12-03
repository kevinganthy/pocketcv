package main

import (
	"log"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/jsvm"

	"pocketbase/database"
)

func main() {
	// Create PocketBase
	app := pocketbase.New()

	// Activate js hooks
	jsvm.MustRegister(app, jsvm.Config{
		HooksWatch:    true,
		HooksPoolSize: 25,
	})

	// Serves static files from the provided public dir (if exists)
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), true))
		return nil
	})

	// Implements init database
	app.OnAfterBootstrap().Add(func(e *core.BootstrapEvent) error {
		db := database.New(app)
		err := db.Seed()
		if err != nil {
			log.Fatalf("Error during database seeding: %v", err)
		}
		return nil
	})

	// Start the app
	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
