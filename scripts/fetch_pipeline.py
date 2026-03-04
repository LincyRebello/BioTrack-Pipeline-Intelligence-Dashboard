import requests
import json

def fetch_trial(nct_id):
    url = f"https://clinicaltrials.gov/api/v2/studies/{nct_id}"
    try:
        r = requests.get(url, timeout=10)
        if r.status_code != 200:
            return None
        data = r.json()
        proto = data.get("protocolSection", {})
        design = proto.get("designModule", {})
        return {
            "enrollment": design.get("enrollmentInfo", {}).get("count")
        }
    except Exception as e:
        print(f"Error fetching {nct_id}: {e}")
        return None

with open("data/pipeline.json") as f:
    drugs = json.load(f)

for drug in drugs:
    nct = drug.get("nctid")
    if not nct:
        continue
    print(f"Checking {drug['name']}...")
    live = fetch_trial(nct)
    if live and live["enrollment"]:
        drug["enrollment"] = live["enrollment"]
        print(f"  Updated enrollment to {live['enrollment']}")

with open("data/pipeline.json", "w") as f:
    json.dump(drugs, f, indent=2)

print("Done!")
