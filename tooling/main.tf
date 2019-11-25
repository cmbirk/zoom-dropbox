// Configure the Google Cloud provider
provider "google" {
  credentials = "${file("~/.gcloud/zoom-dropbox-keyfile.json")}"
  project = "zoom-dropbox-backup"
  region = "us-east1"
}
