import csv
import json
import os
import sys


def csv_to_json(csv_filepath):
    path, _ = os.path.splitext(csv_filepath)

    with open(csv_filepath, mode="r", encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        json_data = [row for row in csv_reader]

    with open(f"{path}.json", mode="w", encoding="utf-8") as json_file:
        json.dump(json_data, json_file, indent=4)


if __name__ == "__main__":
    csv_filepath = sys.argv[1]
    csv_to_json(csv_filepath)
